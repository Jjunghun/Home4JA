Router.configure({
    mainTemplate: 'main'
});

Router.route('/', {name: 'main'});
Router.route('/post', {name: 'post'});
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



        //Accounts.createUser({name: name, password: password, email: email},
        //    function (err) {
        //        if (err) {}
        //        else {}
        //    });
        //
        //return false;
    }
});

Template.main.helpers({
   toposts: function () {
       console.log(Posts.find({}));
       return Posts.find({});
   } 
});
