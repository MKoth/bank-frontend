// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  // apiUrl: 'http://192.168.15.100:3500',
  // apiUrl: 'http://192.168.15.102:3500',
  // apiUrl: 'http://localhost:3500',
  apiUrl: 'https://gis-homolog.geocreditoagricola.com.br/api',
  //  apiUrl: 'http://68.183.24.171:3500',

  // tokenWhitelistedDomains: [ new RegExp('192.168.15.100:3500') ],
  tokenWhitelistedDomains: [ new RegExp('localhost:3500') ],
  tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token') ]
};
