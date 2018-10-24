console.log("page loaded");
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
$scope.running = true;
$scope.update_data = function() {
  console.log("clicked");
  var ip = "www.google.com";
  $.get('/update_data', function (req, res) {
    console.log("Updating data...");
  });
  // $http({
  //   method: 'GET',
  //   url: '/update_data'
  // }).then(function success(res) {
  //   console.log("success: "+res);
  // }, function error(res) {
  //   console.log("error: "+res);
  // });
}
});