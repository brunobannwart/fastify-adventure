import { initializeApplication } from '@core/setup';

import { logInit } from '@shared/logging/local';

export class Server {
  constructor () { }

  async start (): Promise<void> {
    const server = initializeApplication();

    const application = await server.listen({
      port: 3000,
    });

    logInit(`Server started at ${application}`);
  }
}