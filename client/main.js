Router.configure({
   //mainTemplate: 'main'
   layoutTemplate: 'main'
});

Router.route('/', {name: 'login'});
Router.route('/join', {name: 'join'});
Router.route('/post', {name: 'post'});
Router.route('/login', {name: 'loginPage'});

Template.main.helpers({
   // toposts: function () {
   //     console.log(Posts.find({}));
   //     return Posts.find({});
   // } 
});