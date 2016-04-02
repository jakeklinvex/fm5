Meteor.publish("userData", function () {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId},
                             {fullName: 1, denomination:1}; 
  } else {
    this.ready();
  }
});