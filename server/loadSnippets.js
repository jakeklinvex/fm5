  Meteor.startup(function () {
    if (Snippets.find().count() === 0) {
      var snippets = [
        {
        'DisplayName': 'It’s Origin Is Complex',
        'author': 'Geoff Chapman'
      },
      {
        'DisplayName': 'Living This Day for That Day Impacts What We Do',
        'author': 'Kurt Bjorklund'
      },
      {
        'DisplayName': 'The relativism-irreligion thief. How does relativism steal joy and power?',
        'author': 'Timothy Keller'
    }
      ];
 
      for (var i = 0; i < snippets.length; i++) {
        Snippets.insert(snippets[i]);
      }
    }
  });
