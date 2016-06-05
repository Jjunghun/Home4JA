Template.post.events({
    "submit .new-title": function (event) {
      event.preventDefault();

      var contentsInfo = {
          title : event.target.title.value,
          content : $("#content").val()
      };

      console.log(contentsInfo);

      Meteor.call("addPost", contentsInfo);
        
      event.target.title.value = "";
    },

    'click #confirm': function () {
        Router.go('/');
    }
});