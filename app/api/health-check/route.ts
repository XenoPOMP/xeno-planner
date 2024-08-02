// api/health-check
import { NextResponse } from 'next/server';

export const revalidate = 30;

export async function GET() {
  return NextResponse.json({ status: 'running' });
}
