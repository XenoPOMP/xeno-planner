// api/health-check

export const revalidate = 30;

export async function GET() {
  return Response.json({ status: 'running' });
}
