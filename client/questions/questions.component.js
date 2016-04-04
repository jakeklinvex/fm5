angular.module('forgottenMore').directive('questions', function () {
    return {
      restrict: 'E',
      templateUrl: 'client/questions/questions.html',
      controllerAs: 'questions',
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

