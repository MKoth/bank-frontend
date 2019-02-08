export const environment = {
  production: true,
  apiUrl: 'http://68.183.24.171:3500',

  tokenWhitelistedDomains: [ new RegExp('68.183.24.171:3500') ],
  tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token') ]
};
