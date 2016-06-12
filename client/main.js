Session.set("target", "default");
// Session.set(String key, any value);


Template.main.helpers({
    toposts: function () {
        return Posts.find({});
    }
});

Template.view.helpers({
    toposts: function () {
        return Posts.find({'contentsInfo.title' : Session.get("target")});
    }
});