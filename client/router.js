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

Router.route('/about', {name: 'about'});
Router.route('/intro', {name: 'intro'});
Router.route('/rules', {name: 'rules'});
Router.route('/tips', {name: 'tips'});
Router.route('/list', {name: 'list'});


    Template.about.events({
    'click #boot':function (evt) {
        $('html, body').animate({scrollTop: $("#tips").offset().top}, 0);
        $('#tips').css('margin-bottom',750);
    }
});