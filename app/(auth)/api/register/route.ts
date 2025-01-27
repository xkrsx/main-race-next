import { NextRequest, NextResponse } from 'next/server';
import type { NewCourier } from '../../../../database/couriers';

type RegisterResponseBodyPost =
  | {
      courier: NewCourier;
    }
  | { errors: { message: string }[] };

export async function POST(
  request: NextRequest,
): Promise<NextResponse<RegisterResponseBodyPost>> {
  const body = await request.json();
  return NextResponse.json({ courier: body });
}
