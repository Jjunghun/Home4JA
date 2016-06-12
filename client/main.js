Session.set("target", "default");
// Session.set(String key, any value);

<<<<<<< HEAD
Router.configure({
<<<<<<< HEAD
    mainTemplate: 'main'
=======
   layoutTemplate: 'layout'
>>>>>>> 17e1610318f93294307d6eea968b824fe3766ef9
});

Router.route('/', {name: 'main'});
Router.route('/post', {name: 'post'});
<<<<<<< HEAD
Router.route('/complete', {name: 'complete'});
Router.route('/about', {name: 'about'});
// Router.route('/post', function () {
//    this.render('post');
// });

Template.main.events({
    'click #post' : function () {
        Router.go('/post');
    },
    'click #about':function() {
        Router.go('/about')
    },
    'click .message a':function(){
        $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
    },
    'click  #login':function(event){
        event.preventDefault();
        var name = event.target.NAME.value;
        var password = event.target.PSW.value;

        Meteor.loginWithPassword(email, password, function(err){
            if (err){}
            // The user might not have been found, or their passwword
            // could be incorrect. Inform the user that their
            // login attempt has failed.
            else{}
            // The user has been logged in.
        });
        return false;
    },
    'click .register-form #create':function(event) {
        event.preventDefault();
        //var name = event.target.NAME.value;
        //var password = event.target.PSW.value;
        //var email = event.target.EMAIL.value;

        var loginInfo = {
          name : $("#name").val(),
          password: $("#psw").val(),
          email: $("#email").val()
       };

        console.log(loginInfo);
=======
Router.route('/login', {name: 'loginPage'});
Router.route('/joinPage', {name: 'joinPage'});
Router.route('/view/:_id', {
    name: 'view',
    data: function () {
        var id = this.params._id;
        return Posts.find({_id: id});
    }
});
>>>>>>> 17e1610318f93294307d6eea968b824fe3766ef9

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

<<<<<<< HEAD
Template.main.helpers({
   toposts: function () {
       console.log(Posts.find({}));
       return Posts.find({});
   } 
});
=======
>>>>>>> test1
Template.view.helpers({
    toposts: function () {
        return Posts.find({'contentsInfo.title' : Session.get("target")});
    }
});
>>>>>>> 17e1610318f93294307d6eea968b824fe3766ef9
