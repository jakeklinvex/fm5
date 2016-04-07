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
            this.newQuestion.lgDisplay = "Q";
            this.newQuestion.types = "Question";
            this.newQuestion.date = new Date();
          Questions.insert(this.newQuestion);
          this.newQuestion = {};
        };

        this.removeQuestion = (answer) => {
          Questions.remove({_id: answer._id});
        };
          
        var hasLiked = false;
    this.likeClick = function () {
        if (!hasLiked) {
            hasLiked = true;
            this.liked = 'Unlike';
            this.likeCount += 1;
        } else {
            hasLiked = false;
            this.liked = 'Like';
            this.likeCount -= 1;
        }
    };
          
        /*this.upVote = function(ques) {

    ques.votes++;
    ques.$update(function() {
        $location.path('questions/' + questions._id);
    }, function(errorResponse) {
        // rollback votes on fail also
        $scope.error = errorResponse.data.message;
    });
}*/
          
          
      }
    }
  });