import 'reflect-metadata';
import './core/module-alias';

import { Server } from '@src/server';

import { initializeConstants } from '@core/constants';
import { initializeDatabase } from '@core/db/setup';

import { logError } from '@shared/logging/local';

async function bootstrap () {
  initializeConstants();
  await initializeDatabase();

  const server = new Server();
  await server.start();
}

bootstrap().catch(err => {
  logError(err.message);
});