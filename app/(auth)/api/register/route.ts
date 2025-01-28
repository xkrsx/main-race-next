import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import type { NewCourier } from '../../../../database/couriers';

type RegisterResponseBodyPost =
  | {
      courier: NewCourier;
    }
  | { errors: { message: string }[] };

// const courierSchema = z
//   .object({
//     number: z
//       .string()
//       .min(1, { message: 'Number must have minimum 1 digit.' })
//       .max(3, { message: 'Number must have maximum 3 digits.' }),
//     password: z
//       .string()
//       .min(4, { message: 'Password must have minimum 4 characters.' })
//       .max(10, { message: 'Username must have maximum 10 characters.' })
//       .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,}$/, {
//         message:
//           'Password must have one uppercase letter, one lowercase letter, one number and one special character.',
//       }),
//     confirmPassword: z
//       .string()
//       .min(4, { message: 'Password must have minimum 4 characters.' })
//       .max(10, { message: 'Username must have maximum 10 characters.' })
//       .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,}$/, {
//         message:
//           'Password must have one uppercase letter, one lowercase letter, one number and one special character.',
//       }),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     path: ['confirmPassword'],
//     message: 'Passwords do not match.',
//   });

export async function POST(
  request: NextRequest,
): Promise<NextResponse<RegisterResponseBodyPost>> {
  const body: { newCourier: NewCourier } = await request.json();

  const result = courierSchema.safeParse(body);

  console.log(result);
  return NextResponse.json({ courier: result.error });
}
