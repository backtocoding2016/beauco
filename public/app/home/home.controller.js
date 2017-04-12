(function () {

	'use strict';
	var app;

	app = angular.module('imbeau');
	app.controller('homeCtrl', ['$scope', '$rootScope', '$state', 'homeSvc', 'authSvc', function homeCtrl($scope, $rootScope, $state, homeSvc, authSvc){

		//FB.XFBML.parse();

		$scope.slides = [1, 2, 3, 4];

	}]);
}());