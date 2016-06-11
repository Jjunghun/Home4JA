Template.navbar.events({
    'click #right-logout': function () {
        Meteor.logout(function () {
            Router.go('/login');
        });
    }
});