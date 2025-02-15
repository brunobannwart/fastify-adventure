import * as z from 'zod';

const Schema = z.object({
  NODE_ENV: z.string(),
  PORT: z.string().default('3025'),
  APPLICATION_NAME: z.string().optional(),
  APPLICATION_API_KEY: z.string(),
  APPLICATION_TIMEZONE: z.string().default('America/Sao_Paulo'),
  APPLICATION_LOCALE: z.string().default('pt-br'),

  DATABASE_HOST: z.string(),
  DATABASE_PORT: z.string(),
  DATABASE_NAME: z.string(),
  DATABASE_USERNAME: z.string(),
  DATABASE_PASSWORD: z.string(),
  DATABASE_CERTIFICATE: z.string().optional(),
  DATABASE_POOL_MIN: z.string().optional(),
  DATABASE_POOL_MAX: z.string().optional(),

  AWS_ACCESS_KEY: z.string(),
  AWS_SECRET_KEY: z.string(),
  AWS_CLOUDWATCH_REGION: z.string(),
  AWS_CLOUDWATCH_GROUP: z.string(),
});

export type ConstantsSchemaType = typeof Schema._output;

export default Schema;