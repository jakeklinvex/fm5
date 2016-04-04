angular.module('forgottenMore').directive('snippetsSearch', function () {
    return {
      restrict: 'E',
      templateUrl: 'client/snippets/snippets-list/snippets-search.html',
      controllerAs: 'snippetsSearch',
      controller: function ($scope, $reactive) {
        $reactive(this).attach($scope);

        this.newSnippet = {};
          this.sort = {
                displayTitles: 1
                };

        this.helpers({
          snippets: () => {
            return Snippets.find({}, { sort : this.getReactively('sort') });
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
            this.newSnippet.owner = Meteor.user()._id;
          Snippets.insert(this.newSnippet);
          this.newSnippet = {};
        };

        this.removeSnippet = (snippet) => {
          Snippets.remove({_id: snippet._id});
        }
      }
    }
  });