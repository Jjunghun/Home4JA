Session.set("target", "default");
// Session.set(String key, any value);

Router.configure({
   layoutTemplate: 'layout'
});

Router.route('/', {name: 'main'});
Router.route('/login', {name: 'login'});
Router.route('/join', {name: 'join'});
Router.route('/post', {name: 'post'});
Router.route('/loginPage', {name: 'loginPage'});
Router.route('/joinPage', {name: 'joinPage'});
Router.route('/view/:_id', {
    name: 'view',
    data: function () {
        var id = this.params._id;
        return Posts.find({_id: id});
    }
});

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