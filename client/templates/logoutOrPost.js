Template.logoutOrPost.events({
    'click #front-logout' : function () {
        Meteor.logout(function () {
            Router.go('/');
        });
    }
});