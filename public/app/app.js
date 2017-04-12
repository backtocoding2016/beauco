(function () {

  'use strict';
  var app = angular.module('imbeau', ['ui.router', 'ui.bootstrap', 'ui.bootstrap.tpls', 'ui.bootstrap.modal', 'ngAnimate', 'ngCookies']);

  app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', configRoutes]);

  function configRoutes ($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/home/home.html',
        controller: 'homeCtrl'
      })
      .state('products', {
        url: '/products',
        templateUrl: 'app/products/products.html',
        controller: 'productsCtrl'
      })
      .state('add', {
        url: '/add',
        templateUrl: 'app/add/add.html',
        controller: 'addCtrl'
      })
      .state('skiniq', {
        url: '/skiniq',
        templateUrl: 'app/skiniq/skiniq.html',
        controller: 'skiniqCtrl'
      })
      .state('search', {
        url: '/search',
        templateUrl: 'app/search/search.html',
        controller: 'searchCtrl'
      })

    $urlRouterProvider.otherwise('/home');

    // $locationProvider.html5Mode({
    //   enabled: true
    // });

  };

  app.run(['$rootScope', '$window', 'authSvc', '$timeout', '$state', '$cookies', function ($rootScope, $window, authSvc, $timeout, $state, $cookies) {

    $window.fbAsyncInit = function() {
      FB.init({
        appId      : '1697199057246897',
        channelUrl: 'app/channel.html',
        status: true,
        cookie: true,
        xfbml      : true,
        version    : 'v2.8'
      });
      console.log("Ronald-Facebook SDK called");
      authSvc.watchLoginChange();
    };

    (function(d){
      var id = 'facebook-jssdk',
      ref = d.getElementsByTagName('script')[0];

      if (d.getElementById(id)) {
        return;
      }
      var js = d.createElement('script');
      js.id = id;
      js.async = true;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      ref.parentNode.insertBefore(js, ref);
    }(document));
    
    }]);

}());
