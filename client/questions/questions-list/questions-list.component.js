angular.module('forgottenMore').directive('questionsList', function () {
    return {
      restrict: 'E',
      templateUrl: 'client/questions/questions-list/questions-list.html',
      controllerAs: 'questionsList',
      controller: function ($scope, $reactive) {
        $reactive(this).attach($scope);

        this.newSnippet = {};

        this.helpers({
          snippets: () => {
            return Snippets.find({});
          }
        });

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