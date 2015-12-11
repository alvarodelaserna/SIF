'use strict'

angular.module('starter')

.controller('VideosCtrl', ['$scope', '$stateParams', 'Videos', function($scope, $stateParams, Videos) {
  $scope.videos = Videos.all();
}])