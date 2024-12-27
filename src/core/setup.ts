import compression from '@fastify/compress';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import swagger from '@fastify/swagger';
import swaggerUi from '@fastify/swagger-ui';
import fastify from 'fastify';

export function initializeApplication () {
  const server = fastify();

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
  });

  server.register(swaggerUi, {
    routePrefix: '/docs',
  });

  return server;
}
