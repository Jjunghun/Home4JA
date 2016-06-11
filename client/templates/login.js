Template.login.events({
    'click #front-login-submit': function (evt, tmpl) {
        var username = tmpl.find('input[id=front-login-username]').value;
        var password = tmpl.find('input[id=front-login-password]').value;

        Meteor.loginWithPassword(username, password, function (error) {
            if (error) {
                alert('로그인 실패');
            } else {
                alert('로그인 성공');
                console.log(Meteor.loggingIn());
            }
        });
    }
});