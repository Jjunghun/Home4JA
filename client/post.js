Template.post.events({
    "submit .new-context": function (event) {
      event.preventDefault();

      var text = event.target.text.value;

        Meteor.call("addPost", text);
        
      event.target.text.value = "";
    },

    'click #confirm': function () {
        Router.go('/');
    }
});
