angular.module('forgottenMore').directive('snippetDetails', function () {
    return {
      restrict: 'E',
      templateUrl: 'client/snippets/snippet-details/snippet-details.html',
      controllerAs: 'snippetDetails',
      controller: function ($scope, $stateParams, $reactive) {
        $reactive(this).attach($scope);
 
        this.helpers({
          snippet: () => {
            return Snippets.findOne({_id: $stateParams.snippetId});
          }
        });
 
        this.save = () => {
          Snippets.update({_id: $stateParams.snippetId}, {
            $set: {
            
                displayTitle: this.snippet.displayTitle,
                authors: this.snippet.authors,
                churches: this.snippet.churches,
                denominations: this.snippet.denominations,
                cities: this.snippet.cities,
                types: this.snippet.types,
                date: this.snippet.date,
                text: this.snippet.text,
                persons: this.snippet.persons,
                topics: this.snippet.topics,
                Sub1: this.snippet.Sub1,
                Sub2: this.snippet.Sub2,
                Sub3: this.snippet.Sub3,
                Sub4: this.snippet.Sub4,
                Sub5: this.snippet.Sub5,
                headings: this.snippet.headings,
                ref: this.snippet.ref,
                bible: this.snippet.bible
                
            }
          }, (error) => {
            if (error) {
              console.log('Oops, unable to update the party...');
            }
            else {
              console.log('Done!');
            }
          });
        };
      }
    }
  });