import { z } from 'zod';

// Schema for login request body
export const loginFormSchema = z.object({
  email: z.string(),
  password: z.string(),
});
