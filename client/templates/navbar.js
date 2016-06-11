Template.navbar.events({
    'click #right-logout': function () {
        Meteor.logout(function () {
            Router.go('/loginPage');
        });
    },
    'click #right-login': function () {
        Router.go('/loginPage');
    }
});