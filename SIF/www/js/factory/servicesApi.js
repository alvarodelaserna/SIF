angular.module('services.api', [])

.factory('servicesApi', function($http) {
  // Might use a resource here that returns a JSON array
  // Some fake testing data
  var headers = {
    'authorization': localStorage.getItem("token"),
    'Content-Type': 'application/json'
  }
  return {
    logout: function() {
      headers = null;
    },
    login: function(email, password, callback) {
      $http.post(dir + '/api/auth', {
        email: email,
        password: password
      }).success(function(data) {
        if (data.status == 200) {
          localStorage.setItem("token", data.token);
          headers = {
            'authorization': localStorage.getItem("token"),
            'Content-Type': 'application/json'
          }
        }
        callback(data);
      });
    },
    lending: function(callback) {
      $http({
        method: 'GET',
        url: dir + '/api/lending', //dir + '/',
        headers: headers
      }).success(function(data) {
        callback(data);
      });
    },
    borrowing: function(callback) {
      $http({
        method: 'GET',
        url: dir + '/api/borrowing', //dir + '/',
        headers: headers
      }).success(function(data) {
        callback(data);
      });
    }
  };
});
