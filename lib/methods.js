Meteor.methods({
<<<<<<< HEAD
    addPost: function (postContext) {
        Posts.insert({
            postContext: postContext,
            createdAt: new Date()
=======
    addPost: function (contentsInfo) {
        Posts.insert({
            contentsInfo: contentsInfo,
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.userId().username
>>>>>>> 17e1610318f93294307d6eea968b824fe3766ef9
        });
    }
});