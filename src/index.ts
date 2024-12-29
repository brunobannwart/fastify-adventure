import './core/module-alias';

import { Server } from '@src/server';

// import { initializeConstants } from '@core/constants';

import { logError } from '@shared/logging/local';

async function bootstrap () {
  // initializeConstants();
  const server = new Server();
  await server.start();
}

bootstrap().catch(err => {
  logError(err.message);
});