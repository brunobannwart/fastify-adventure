import { CreateUserSchema, UpdateUserSchema } from '@domain/user/schemas';

import { UserController } from '@presentation/controllers';

import { ICustomServer } from '@shared/types';

const BASE_ROUTE = '/user';

export default async function UserRoutes (server: ICustomServer) {
  server.post(
    BASE_ROUTE,
    {
      schema: {
        tags: [ 'users' ],
        description: 'Create a new user',
        body: CreateUserSchema,
      },
    },
    UserController.create
  );

  server.put(
    `${BASE_ROUTE}/:id`,
    {
      schema: {
        tags: [ 'users' ],
        description: 'Update a user',
        body: UpdateUserSchema,
      },
    },
    UserController.update
  );
}