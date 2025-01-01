import z from 'zod';

import { UserSchemaErrorCodes } from '@shared/errors';

const UpdateUserSchema = z.object({
  name: z
    .string()
    .min(2, { message: UserSchemaErrorCodes.INVALID_NAME_FORMAT })
    .optional(),
  email: z
    .string()
    .email({ message: UserSchemaErrorCodes.INVALID_EMAIL_FORMAT })
    .optional(),
  cellphone: z
    .string({ message: UserSchemaErrorCodes.INVALID_CELLPHONE_FORMAT })
    .optional(),
  password: z
    .string()
    .min(8, { message: UserSchemaErrorCodes.INVALID_PASSWORD_FORMAT })
    .regex(/[a-zA-Z]/, { message: UserSchemaErrorCodes.INVALID_PASSWORD_FORMAT })
    .regex(/[0-9]/, { message: UserSchemaErrorCodes.INVALID_PASSWORD_FORMAT })
    .regex(/[^a-zA-Z0-9]/, { message: UserSchemaErrorCodes.INVALID_PASSWORD_FORMAT })
    .optional(),
});

export default UpdateUserSchema;