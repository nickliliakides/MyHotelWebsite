const { defineConfig } = require('cypress');
const { plugins } = require('cypress-social-logins');
const googleSocialLogin = plugins.GoogleSocialLogin;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        GoogleSocialLogin: googleSocialLogin, // listens for GoogleSocialLogin task in tests
      });
    },
    baseUrl: 'http://localhost:3000',
    chromeWebSecurity: false, // allow cypress to access cross-domain URLS such as NextAuth.js login provider pages
  },
});
