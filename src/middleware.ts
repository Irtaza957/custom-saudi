import createMiddleware from 'next-intl/middleware';

const locales = ['en', 'ar'];

export default createMiddleware({
  locales,             // Define supported locales
  defaultLocale: 'en', // Define default locale
});

export const config = {
  matcher: ['/', '/(en|ar)/:path*'], // Match the desired routes
};
