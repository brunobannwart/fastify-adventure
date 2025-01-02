import SystemRoutes from '@presentation/routes/system.routes';
import UserRoutes from '@presentation/routes/user.routes';

import { ICustomServer } from '@shared/types';

export function initializeRoutes (server: ICustomServer) {
  server.register(SystemRoutes);
  server.register(UserRoutes);

  return server;
}