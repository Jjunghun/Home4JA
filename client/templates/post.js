Template.post.events({
    'click .confirm': function () {
        var contentsInfo = {
            title : $("#new-title").val(),
            content : $("#new-content").val()
        };

        console.log(contentsInfo);

        Meteor.call("addPost", contentsInfo);

        Router.go('/');
    }
});