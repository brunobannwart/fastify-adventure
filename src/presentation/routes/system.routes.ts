import { SystemController } from '@presentation/controllers';

import { ICustomServer } from '@shared/types';

const BASE_ROUTE = '/system';

export default async function SystemRoutes (server: ICustomServer) {
  server.get(
    `${BASE_ROUTE}/status`,
    SystemController.getHealthStatus
  );
}