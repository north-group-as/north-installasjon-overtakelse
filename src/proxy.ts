import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Vercel-aliasene (*.vercel.app) serverer en komplett kopi av nettstedet.
// Uten denne headeren blir kopien indeksert og konkurrerer med produksjonsdomenet
// om de samme søkene. Canonical alene holder ikke: den ignoreres av søkemotorer
// når den peker på en URL som ikke lenger finnes på produksjonsdomenet.
export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  const host = request.headers.get('host') ?? '';

  if (host.endsWith('.vercel.app')) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
