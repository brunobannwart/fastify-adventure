import compression from '@fastify/compress';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import fastify from 'fastify';
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from 'fastify-type-provider-zod';

import { initializeRoutes } from '@presentation/routes';

export function initializeApplication () {
  const server = fastify().withTypeProvider<ZodTypeProvider>();

  server.setValidatorCompiler(validatorCompiler);
  server.setSerializerCompiler(serializerCompiler);

  server.register(compression);
  server.register(cors, { origin: '*' });
  server.register(helmet);

  server.register(swagger, {
    openapi: {
      info: {
        title: 'Fastify Adventure',
        version: '1.0.0',
      },
    },
    transform: jsonSchemaTransform,
  });

  server.register(swaggerUi, {
    routePrefix: '/docs',
  });

  return initializeRoutes(server);
}
