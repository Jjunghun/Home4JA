Meteor.methods({
    addPost: function (contentsInfo) {
        Posts.insert({
            contentsInfo: contentsInfo,
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.userId().username
        });
    }
});