exports.config = {
  baseUrl: 'http://localhost:8080/',
  specs: [
    'e2e/**/*.js'
  ],

  /**
   * Angular 2 configuration
   *
   * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
   * `rootEl`
   *
   */
  useAllAngular2AppRoots: true,
}
