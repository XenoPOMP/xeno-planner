// api/health-check

export const revalidate = 120;

export async function GET() {
  return Response.json({ status: 'running' });
}
