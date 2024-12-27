import * as z from 'zod';

const Schema = z.object({
  NODE_ENV: z.string(),
  PORT: z.string().default('3025'),
  APPLICATION_NAME: z.string().optional(),
  APPLICATION_API_KEY: z.string(),
  APPLICATION_TIMEZONE: z.string().default('America/Sao_Paulo'),
  APPLICATION_LOCALE: z.string().default('pt-br'),
});

export type ConstantsSchemaType = typeof Schema._output;

export default Schema;