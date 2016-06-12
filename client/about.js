
Router.configure({
    layoutTemplate:'about',
    loadingTemplate: 'loading',
    waitOn:function() {return Meteor.subscribe('posts');}
});


Router.route('/', {name: 'list'});
Router.route('/posts/:_id', {
    name: 'list'
});