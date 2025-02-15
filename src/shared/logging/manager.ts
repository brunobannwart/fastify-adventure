import util from 'util';

import { DateHelper } from '@shared/helpers';
import { CloudwatchLogsAmazon } from '@shared/integration/aws';
import { logError, logInfo } from '@shared/logging/local';
import { overshadowRecursively } from '@shared/utilities';

function logReplacer (log: string): string {
  if (!log) return '';

  if (typeof log === 'string' && log.length > 3000) {
    log = log.slice(0, 3000);
  }

  return log;
}

function getLogConfig () {
  const appName = process.env.APP_NAME;
  const env = process.env.NODE_ENV;
  const debug = process.env.DEBUG === 'true';

  return {
    appName,
    debug,
    env,
  };
}

const LoggerManager = {
  log: async (action: string, log: unknown): Promise<void> => {
    const { appName, env, debug } = getLogConfig();

    if (debug) {
      LoggerManager.logWithDebug(
        action,
        LoggerManager.overshadowLog(log)
      );

      return;
    }

    try {
      await CloudwatchLogsAmazon.putLogEvents(
        `${appName}-${env}`,
        action,
        [
          {
            message: LoggerManager.overshadowLog(log),
            timestamp: DateHelper.getCurrentTimestamp(),
          },
        ]
      );

    } catch (err) {
      logError(`Error when logging into manager: ${err}`);
    }
  },

  logWithDebug (action: string, log: string) {
    logInfo(action);
    logInfo(log);
  },

  overshadowLog (log: unknown) {
    const overshadowed = overshadowRecursively(log as Record<string, unknown>, [
      'password',
      'recoveryToken',
      'x-multifactor-code',
      'x-api-key',
    ]);

    return logReplacer(util.inspect(overshadowed, false, null));
  },

  databaseLogger: {
    logMigration: (o: unknown): void => {
      const { debug } = getLogConfig();

      if (debug) {
        LoggerManager.log('database', {
          method: 'log-migration',
          data: o,
        });
      }
    },
    logQuery: (o: unknown): void => {
      const { debug } = getLogConfig();

      if (debug) {
        LoggerManager.log('database', {
          method: 'log-query',
          data: o,
        });
      }
    },
    logQueryError: (o: unknown): void => {
      const { debug } = getLogConfig();

      if (debug) {
        LoggerManager.log('database', {
          method: 'log-query-error',
          data: o,
        });
      }
    },
    logQuerySlow: (o: unknown): void => {
      const { debug } = getLogConfig();

      if (debug) {
        LoggerManager.log('database', {
          method: 'log-query-slow',
          data: o,
        });
      }
    },
    logSchemaBuild: (o: unknown): void => {
      const { debug } = getLogConfig();

      if (debug) {
        LoggerManager.log('database', {
          method: 'log-schema-build',
          data: o,
        });
      }
    },
    log: (o: unknown): void => {
      const { debug } = getLogConfig();

      if (debug) {
        LoggerManager.log('database', {
          method: 'log',
          data: o,
        });
      }
    },
    poolErrorHandler: (o: unknown): void => {
      const { debug } = getLogConfig();

      if (debug) {
        LoggerManager.log('database', {
          method: 'pool-error-handler',
          data: o,
        });
      }
    },
  },
};

export default LoggerManager;