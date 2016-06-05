Meteor.methods({
    addPost: function (postContext) {
        Posts.insert({
            postContext: postContext,
            createdAt: new Date()
        });
    }
});