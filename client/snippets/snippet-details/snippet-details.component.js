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
            
                displayTitles: this.snippet.displayTitles,
                authors: this.snippet.authors,
                churches: this.snippet.churches,
                denominations: this.snippet.denominations,
                cities: this.snippet.cities,
                types: this.snippet.types,
                datePublished: this.snippet.datePublished,
                text: this.snippet.text,
                persons: this.snippet.persons,
                topics: this.snippet.topics,
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