```javascript
import {unstable_getServerSession} from 'next-auth';
import {NextResponse} from 'next/server';

const options = {
  // your NextAuth options
};

export async function middleware(req) {
  const session = await unstable_getServerSession(req,{},options);

  if (!session) {
    return NextResponse.redirect(new URL('/api/auth/signin', req.url));
  }

  // Continue to the next middleware or page
}

export const config = {
  matcher: ['/protected/:path*'], // Protect only specific paths
};
```