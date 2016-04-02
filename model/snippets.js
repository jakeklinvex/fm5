Snippets = new Mongo.Collection("snippets");

Snippets.allow({
  insert: function (userId, snippet) {
    return userId && snippet.owner === userId;
  },
  update: function (userId, snippet, fields, modifier) {
    return userId && snippet.owner === userId;
  },
  remove: function (userId, snippet) {
    return userId && snippet.owner === userId;
  }
});