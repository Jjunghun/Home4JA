Session.set("target", "default");
// Session.set(String key, any value);

<<<<<<< HEAD
Router.configure({
   layoutTemplate: 'layout'
});

Router.route('/', {name: 'login'});
Router.route('/join', {name: 'join'});
Router.route('/post', {name: 'post'});
Router.route('/login', {name: 'loginPage'});
Router.route('/joinPage', {name: 'joinPage'});
Router.route('/view/:_id', {
    name: 'view',
    data: function () {
        var id = this.params._id;
        return Posts.find({_id: id});
    }
});

Template.layout.helpers({
   toposts: function () {
       return Posts.find({});
   }
});

=======

Template.main.helpers({
    toposts: function () {
        return Posts.find({});
    }
});

>>>>>>> test1
Template.view.helpers({
    toposts: function () {
        return Posts.find({'contentsInfo.title' : Session.get("target")});
    }
});