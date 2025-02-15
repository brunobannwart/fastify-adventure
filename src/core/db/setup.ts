import path from 'path';
import { DataSource } from 'typeorm';

import { getConstants } from '@core/constants';

import LoggerManager from '@shared/logging/manager';

const ENTITIES = path.join(__dirname, 'entities/*{.ts,.js}');
const MIGRATIONS = path.join(__dirname, 'migrations/*{.ts,.js}');

const DatabaseConnection = new DataSource({
  type: 'postgres',
  uuidExtension: 'uuid-ossp',
  host: getConstants().database.host,
  port: getConstants().database.port,
  database: getConstants().database.name,
  username: getConstants().database.username,
  password: getConstants().database.password,
  synchronize: false,
  ssl: {
    ca: getConstants().database.certificate ? Buffer.from(getConstants().database.certificate, 'base64') : null,
    rejectUnauthorized: !!getConstants().database.certificate,
  },
  entities: [ ENTITIES ],
  migrations: [ MIGRATIONS ],
  migrationsRun: true,
  migrationsTransactionMode: 'each',
  logger: LoggerManager.databaseLogger,
  logging: [ 'error' ],
  extra: {
    max: getConstants().database.pool.max,
    extra: {
      max: getConstants().database.pool.max,
    },
  },
});

export async function initializeDatabase (): Promise<void> {
  await DatabaseConnection.initialize();
}