import { Settings } from 'luxon';

import { logError, logInit } from '@shared/logging/local';
import { IConstants, IEnvironmentSecrets } from '@shared/types';
import ConstantsSchema, { ConstantsSchemaType } from '@shared/validations/constants';

const Constants: IConstants = {} as IConstants;

function parseEnv (): ConstantsSchemaType {
  let constants: ConstantsSchemaType = null;

  try {
    constants = ConstantsSchema.parse(process.env);
  } catch (error) {
    logError('Error when initializing the application in constants parse');

    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error();
  }

  return constants;
}

function setConstants () {
  const secrets: IEnvironmentSecrets = parseEnv();

  Constants.env = secrets.NODE_ENV;
  Constants.port = Number(secrets.PORT);

  Constants.application = {
    name: secrets.APPLICATION_NAME,
    apiKey: secrets.APPLICATION_API_KEY,
    locale: secrets.APPLICATION_LOCALE,
    timezone: secrets.APPLICATION_TIMEZONE,
  };

  return Constants;
}

function setTimezone () {
  Settings.defaultLocale = Constants.application.locale;
  Settings.defaultZone = Constants.application.timezone;
}

export function initializeConstants () {
  setConstants();
  setTimezone();

  logInit('Environment initialized');
}

export function getConstants (): IConstants {
  if (!Object.keys(Constants).length) {
    setConstants();
    setTimezone();
  }

  return Constants;
}