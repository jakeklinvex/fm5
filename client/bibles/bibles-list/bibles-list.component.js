var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {

  
  $scope.bibles = [{book:'', beginning: {chapter: '', verse: ''}, ending:{chapter: '', verse: ''}}];
  
  $scope.removeFrom = function(array, index) {
    array.splice(index, 1);
  };
  
  $scope.addTo = function(array, template) {
    array.push(template);
  };
  
});