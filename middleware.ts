import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''

  // Handle explorer subdomain
  if (hostname.startsWith('explorer.')) {
    // Rewrite to /explorer route
    return NextResponse.rewrite(new URL('/explorer', request.url))
  }

  // Handle app subdomain
  if (hostname.startsWith('app.')) {
    // Rewrite to /app-portal route
    return NextResponse.rewrite(new URL('/app-portal', request.url))
  }

  // Default - allow normal routing
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
