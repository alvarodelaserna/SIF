'use strict'

angular.module('starter')

.controller('LoginCtrl', function(servicesApi, $http, $window, $state, $ionicPopup) {
	
	console.log('entro');
    var vm = this;
    vm.user = {};
    vm.user.email = "";
    vm.user.password = "";

    vm.message = '';

    vm.submit = submit; 
    function submit() {
      servicesApi.login(vm.user.email, vm.user.password, function(data) {
        if (data.status == 200) {
          $state.go('tab.cardio');
        } else if (data.status == false) {
          $ionicPopup.alert({
            title: 'Alert',
            content: 'Error during login, try again.'
          })
        }
      })
    };
});