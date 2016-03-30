angular.module('forgottenMore').directive('answersList', function () {
    return {
      restrict: 'E',
      templateUrl: 'client/tools/tools-list/answers-list.html',
      controllerAs: 'answersList',
      controller: function ($scope, $reactive) {
        $reactive(this).attach($scope);

        this.newAnswer = {};

        this.helpers({
          answers: () => {
            return Answers.find({});
          }
        });

        this.addAnswer = () => {
          Answers.insert(this.newAnswer);
          this.newAnswer = {};
        };

        this.removeAnswer = (answer) => {
          Answers.remove({_id: answer._id});
        }
      }
    }
  });