import z from 'zod';

const CreateUserSchema = z.object({
  name: z
    .string(),
  email: z
    .string()
    .email(),
  cellphone: z
    .string(),
});

export default CreateUserSchema;