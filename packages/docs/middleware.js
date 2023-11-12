import { withLocales } from 'nextra/locales'
 
export const middleware = withLocales((request) => {
  // return {
  //   locale: request.headers['accept-language'] || 'en',
  //   locales: ['en', 'es'],
  //   defaultLocale: 'en',
  // }
})
