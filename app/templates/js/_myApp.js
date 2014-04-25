define(['angular', 'angular-route'], function(angular) {
  var <%=appNameNoSpace%> = angular.module('<%=appNameNoSpace%>', ['ngRoute']);

  <%=appNameNoSpace%>.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl: 'partials/home.html'
    });
  });
});