requirejs.config({
  baseUrl: './js',

  paths: {
    'bootstrap': '../lib/bootstrap.min',
    'jquery': '../lib/jquery.min',
    'angular': '../lib/angular.min',
    'angular-route': '../lib/angular-route.min'
  },

  shim: {
    'angular': {
      exports: 'angular'
    },

    'angular-route': {
      deps: ['angular']
    }

  }

});

require(['jquery', 'angular', 'angular-route'], function($, angular, ngRoute) {
  console.log('It works!');
  console.log($, angular, ngRoute);
});
