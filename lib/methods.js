Meteor.methods({
    addPost: function (contentsInfo) {
        Posts.insert({
            contentsInfo: contentsInfo,
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.userId().username
        });
    },

    deletePost: function (postId) {
        var post = Posts.findOne(postId);

        if(post.owner !== Meteor.userId())
            throw new Meteor.Error("not-authorized");

        Posts.remove(postId);

        console.log("successed remove!");
    }
});