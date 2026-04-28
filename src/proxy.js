import { NextResponse } from 'next/server';
import { auth } from './app/lib/auth';
import { headers } from 'next/headers';

export async function middleware(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });


  if (!session) {
    return NextResponse.redirect(new URL('/signup', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/allphoto',
    '/photos/:path*',
  ],
};