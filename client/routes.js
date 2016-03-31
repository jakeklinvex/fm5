angular.module('forgottenMore').config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
        .state('container', {
            url: "",
          
        })
    
        .state('tools2', {
            url: "/tools2",
            views: {
                "container": {
                    template: '<tools></tools>'
                },
            },
            abstract: true
        })
        
        
        .state('tools2.content', {
            url: "",
            views: {
                "search":{
                template: '<tools-list></tools-list>'
                },
                "chat":{
                template: '<answers-list></answers-list>'
                },
                
            
            }
        })
    
        .state('snippets2', {
            url: "/snippets2",
            views: {
                "container": {
                    template: '<snippets2></snippets2>'
                },
            },
            abstract: true
        })
        
        
        .state('snippets2.content', {
            url: "",
            views: {
                "snippets2":{
                template: '<snippets-list></snippets-list>'
                },
                
            
            }
        })
    
        .state('snippets2.contentDetails', {
            url: '/snippets/:snippetId',
            views: {
                "snippets2":{
                
                template: '<snippet-details></snippet-details>'
                },
                
            
            }
        })
    
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
    .state('tools.chat', {
        url: '/chat',
        template: '<answers-list></answers-list>'
      })
    .state('toolsDetails', {
        url: '/tools/:snippetId',
        template: '<tool-details></tool-details>'
      })
    .state('answers', {
        url: '/answers',
        template: '<answers-list></answers-list>'
      })
    .state('home',{
        views: {
            'chat': {
            templateUrl: 'chat-room.html'
            }
        }
    })


    $urlRouterProvider.otherwise("/tools2");
  });

