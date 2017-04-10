(function () {

  "use strict";
  var app;
  app = angular.module('imbeau');

  app.factory('authSvc', ['$rootScope', '$http', '$log', function authSvc($rootScope, $http, $log) {

    var user = {};

    var watchLoginChange = function () {
      var _self = this;

      FB.Event.subscribe('auth.authResponseChange', function(res) {
        console.log("auth.authResponseChange detected");
        console.log(res.status);
        if (res.status === 'connected') {
          FB.XFBML.parse();
          console.dir(res.authResponse);
          user.facebookUserID = res.authResponse.userID;
          user.accessToken = res.authResponse.accessToken;
          _self.checkIfNewUser(user.userID);
        }  else {
          user = {};
          console.log("Facebook logged out");
        }
      });
    }

    var checkIfNewUser = function (userID) {
      var _self = this;
      /* Look up userID in imbeau user database */
      /* if new user, then _self.getNewUserInfo(); and save response to imbeau database */
      /* Otherwise */
    }

    var getNewUserInfo = function () {
      var _self = this;

      FB.api('/me', {fields: 'first_name, last_name, email, birthday'}, function(res) {
        console.dir(res);
        user.first_name = res.first_name;
        user.last_name = res.last_name;
      });

    }

    var logout = function () {
      //Not being used.
      var _self = this;
      FB.logout(function(response) {
      });

    }

    return {
      watchLoginChange: watchLoginChange,
      checkIfNewUser: checkIfNewUser,
      getNewUserInfo: getNewUserInfo,
      logout: logout
    };
  }]);

}());
