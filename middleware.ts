import { mainUrl } from '@/helper/constants/env-variables'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { User } from './types/User';

export type NextApiReq = NextRequest & { user: User };

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextApiReq) {
    const token = request.cookies.get('token')?.value
    if (token) {
        try {
            return NextResponse.next()

        } catch (error) {
            return NextResponse.next()
        }
    }
    return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/user/:path*',
}