Router.configure({
   mainTemplate: 'main'
});

Router.route('/', {name: 'main'});
<<<<<<< HEAD
//Router.route('/post', {name: 'post'});

Router.route('/post', function () {
   this.render('post');
});

Template.main.events({
    'click #clickme' : function () {
        Router.go('/post');
    }
})
=======
Router.route('/post', {name: 'post'});

// Router.route('/post', function () {
//    this.render('post');
// });

Template.main.events({
    'click #post' : function () {
        Router.go('/post');
    }
});

Template.main.helpers({
   toposts: function () {
       console.log(Posts.find({}));
       return Posts.find({});
   } 
});
>>>>>>> 45fceb35885bca6f7841fb587d4176b20755fad4
