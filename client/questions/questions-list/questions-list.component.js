angular.module('forgottenMore').directive('questionsList', function () {
    return {
      restrict: 'E',
      templateUrl: 'client/questions/questions-list/questions-list.html',
      controllerAs: 'questionsList',
      controller: function ($scope, $reactive) {
        $reactive(this).attach($scope);

        this.newQuestion = {};

        this.helpers({
          answers: () => {
            return Questions.find({});
          }
        });

        this.addQuestion = () => {
            this.newQuestion.owner = Meteor.user()._id;
            this.newQuestion.ownerName = Meteor.user().profile;
            this.newQuestion.types = "question";
            this.newQuestion.date = new Date();
          Questions.insert(this.newQuestion);
          this.newQuestion = {};
        };

        this.removeQuestion = (answer) => {
          Questions.remove({_id: answer._id});
        }
      }
    }
  });