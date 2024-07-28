import { loginFormSchema } from '../form.schema.ts';

// api/auth/login
export async function POST(req: Request) {
  const body = loginFormSchema.parse(await req.json());

  return Response.json({ body });
}
