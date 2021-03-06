// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.services', 'services.api', 'ngCordova'])

.run(function($ionicPlatform, $state) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    var token = localStorage.getItem('token');
    if (token != null) {
      if (ionic.Platform.isIOS()) {
        window.touchid.authenticate(function() {
          $state.go('tab.cardio');
        }, function() {
          alert("Error during authentication, try again.");
        }, "touch ID");
      } else {
        $state.go('tab.cardio');
      }
    }else{
      $state.go('login');
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $sceDelegateProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('login', {
    cache: false,
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl as vm'
  })
  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.cardio', {
    cache: false,
    url: '/cardio',
    views: {
      'tab-cardio': {
        templateUrl: 'templates/tab-cardio.html',
        controller: 'VideosCtrl as vm'
      }
    }
  })

  .state('tab.strength', {
    cache: false,
    url: '/strength',
    views: {
      'tab-strength': {
        templateUrl: 'templates/tab-strength.html',
        controller: 'VideosCtrl as vm'
      }
    }
  })

  .state('tab.flexibility', {
    cache: false,
    url: '/flexibility',
    views: {
      'tab-flexibility': {
        templateUrl: 'templates/tab-flexibility.html',
        controller: 'VideosCtrl as vm'
      }
    }
  })


  //   .state('tab.chat-detail', {
  //     url: '/chats/:chatId',
  //     views: {
  //       'tab-chats': {
  //         templateUrl: 'templates/chat-detail.html',
  //         controller: 'ChatDetailCtrl'
  //       }
  //     }
  //   })

  // .state('tab.account', {
  //   url: '/account',
  //   views: {
  //     'tab-account': {
  //       templateUrl: 'templates/tab-account.html',
  //       controller: 'AccountCtrl'
  //     }
  //   }
  // });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

  $sceDelegateProvider.resourceUrlWhitelist(['self', new RegExp('^(http[s]?):\/\/(w{3}.)?youtube\.com/.+$')]);

});
