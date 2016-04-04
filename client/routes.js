angular.module('forgottenMore').config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
        .state('container', {
            url: "",
          
        })
    
    // ********* Q&A VIEW ***************
        .state('questions', {
            url: "/questions",
            views: {
                "container": {
                    template: '<questions></questions>'
                },
            },
            abstract: true
        })
        
        
        .state('questions.content', {
            url: "",
            views: {
                "search":{
                template: '<tools-list></tools-list>'
                },
            }
        })
   
    
    
    // ********* TOOLS VIEW ***************
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
    
    
    // ********* USER PROFILE VIEW ***************
        .state('user', {
            url: "/user",
            views: {
                "container": {
                    template: '<user></user>'
                },
            },
            abstract: true
        })
        
        
        .state('user.userDetails', {
            url: '/users/:userId',
            views: {
                "profileEdit":{
                template: '<user-details></user-details>'
                },
                
            },
        
        })
    // ********* CONTENT MANAGEMENT VIEW ***************
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
                "content":{
                template: '<snippets-list></snippets-list>'
                },
                "contentSearch":{
                template: '<snippets-search></snippets-search>'
                },
                
            
            }
        })
    
        .state('snippets2.contentDetails', {
            url: '/snippets/:snippetId',
            views: {
                "content":{
                template: '<snippet-details></snippet-details>'
                },
                
                "contentSearch":{
                template: '<snippets-search></snippets-search>'
                },
            },
            resolve: {
                currentUser: ($q) => {
                    if (Meteor.userId() == null) {
                         return $q.reject('AUTH_REQUIRED');
                    }
                    else {
                        return $q.resolve();
                        }
                    }
                }
        })
    
      /*.state('snippets', {
        url: '/snippets',
        template: '<snippets-list></snippets-list>',*/
    
    
        /*controller: function($scope){
            $scope.bibles = [{book:'', beginning: {chapter: '', verse: ''}, ending:{chapter: '', verse: ''}}];
            
             $scope.removeFrom = function(array, index) {
    array.splice(index, 1);
  };
            
            $scope.addTo = function(array, template) {
    array.push(template);
  };
        }*/
    
   /*   })
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
    }) */


    $urlRouterProvider.otherwise("/tools2");
  })
    .run(function ($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
      if (error === 'AUTH_REQUIRED') {
        $state.go('snippets2.content');
      }
    });

});

