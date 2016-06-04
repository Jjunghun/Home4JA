Meteor.methods({
    addPost: function (text) {
        Posts.insert({
            text: text,
            createdAt: new Date()
        });
        console.log(text);
    }
});