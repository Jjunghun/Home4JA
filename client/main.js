Router.configure({
   mainTemplate: 'main'
});

Router.route('/', {name: 'main'});
//Router.route('/post', {name: 'post'});

Router.route('/post', function () {
   this.render('post');
});

Template.main.events({
    'click #clickme' : function () {
        Router.go('/post');
    }
})