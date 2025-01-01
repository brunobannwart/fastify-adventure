import UserRoutes from '@presentation/routes/user.route';

import { ICustomServer } from '@shared/types';

export function initializeRoutes (server: ICustomServer) {
  server.register(UserRoutes);

  return server;
}