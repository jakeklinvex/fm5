angular.module('forgottenMore').config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('snippets', {
        url: '/snippets',
        template: '<snippets-list></snippets-list>',
        /*controller: function($scope){
            $scope.bibles = [{book:'', beginning: {chapter: '', verse: ''}, ending:{chapter: '', verse: ''}}];
            
             $scope.removeFrom = function(array, index) {
    array.splice(index, 1);
  };
            
            $scope.addTo = function(array, template) {
    array.push(template);
  };
        }*/
      })
      .state('snippetDetails', {
        url: '/snippets/:snippetId',
        template: '<snippet-details></snippet-details>'
      })
    .state('tools', {
        url: '/tools',
        template: '<tools-list></tools-list>'
      })
    .state('toolsDetails', {
        url: '/tools/:snippetId',
        template: '<tool-details></tool-details>'
      })
    .state('answers', {
        url: '/answers',
        template: '<answers-list></answers-list>'
      })


    $urlRouterProvider.otherwise("/tools");
  });

