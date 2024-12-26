import './core/module-alias';

import { Server } from '@src/server';

import { logError } from '@shared/logging/local';

async function bootstrap () {
  const server = new Server();
  await server.start();
}

bootstrap().catch(err => {
  logError(err.message);
});