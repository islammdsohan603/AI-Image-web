import { NextResponse } from 'next/server';
import { auth } from '@/app/lib/auth';
import { headers } from 'next/headers';

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const pathname = request.nextUrl.pathname;

  // যদি user login না থাকে
  if (!session) {
    // protected routes
    if (
      pathname.startsWith('/allphoto') ||
      pathname.startsWith('/photos') ||
      pathname.startsWith('/profile')
    ) {
      return NextResponse.redirect(new URL('/signup', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/allphoto/:path*', '/photos/:path*', '/profile/:path*'],
};