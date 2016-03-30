angular.module('forgottenMore').directive('snippetsList', function () {
    return {
      restrict: 'E',
      templateUrl: 'client/snippets/snippets-list/snippets-list.html',
      controllerAs: 'snippetsList',
      controller: function ($scope, $reactive) {
        $reactive(this).attach($scope);

        this.newSnippet = {};

        this.helpers({
          snippets: () => {
            return Snippets.find({});
          }
        });
          
           /* $scope.snippetsList.newSnippet.bibles = [{book:'', beginning: {chapter: '', verse: ''}, ending:{chapter: '', verse: ''}}];
          
            $scope.removeFrom = function(array, index) {
            array.splice(index, 1);
            };
  
            $scope.addTo = function(array, template) {
            array.push(template);
            }; */

        this.addSnippet = () => {
          Snippets.insert(this.newSnippet);
          this.newSnippet = {};
        };

        this.removeSnippet = (snippet) => {
          Snippets.remove({_id: snippet._id});
        }
      }
    }
  });


