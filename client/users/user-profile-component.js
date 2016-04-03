angular.module('forgottenMore').directive('userDetails', function () {
    return {
      restrict: 'E',
      templateUrl: 'client/users/user-details.html',
      controllerAs: 'userDetails',
      controller: function ($scope, $stateParams, $reactive) {
        $reactive(this).attach($scope);
 
       /* this.helpers({
          user: () => {
            
            return users.findOne({_id: $stateParams.userId});
          }
        }); */
 
        /*this.save = () => {
          Users.update({_id: $stateParams.userId}, {
            $set: {
            
            
                
            }
          }, (error) => {
            if (error) {
              console.log('Oops, unable to update the party...');
            }
            else {
              console.log('Done!');
            }
          });
        }; */
          
          /*Meteor.users.update({_id:Meteor.user()._id}, { 
              $set: {
                  
                profile: Meteor.user().profile,
                authors: this.snippet.authors,
                churches: this.snippet.churches,
                denominations: this.snippet.denominations,
                  
              } }); */
          
      }
    }
  });