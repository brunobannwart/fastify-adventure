import { DateHelper } from '@src/shared/helpers';

import { getConstants } from '@core/constants';

import { ICustomRequest, ICustomResponse, IHealthStatus } from '@shared/types';
import { getMemoryUsage, msToTime } from '@shared/utilities';

const startedAt = DateHelper.now();

class SystemController {
  getHealthStatus (req: ICustomRequest, res: ICustomResponse) {
    const now = DateHelper.now();

    const status: IHealthStatus = {
      app: getConstants().application.name,
      env: getConstants().env,
      startedAt: startedAt.toISO(),
      uptime: msToTime(now.toMillis() - startedAt.toMillis()),
      now: now.toISO(),
      memory: getMemoryUsage(),
    };

    return res.status(200).send(status);
  }
}

export default new SystemController();