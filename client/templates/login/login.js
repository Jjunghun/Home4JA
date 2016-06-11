Template.login.events({
    'click #front-login-submit': function (event, tmpl) {
        var username = tmpl.find('input[id=front-login-username]').value;
        var password = tmpl.find('input[id=front-login-password]').value;

        Meteor.loginWithPassword(username, password, function (error) {
            if (error) {
                alert('해당 아이디가 없거나 비밀번호가 맞지 않습니다.');
            } else {
                alert('로그인이 성공되었습니다.');
                Router.go('/');
                console.log(Meteor.user());
            }
        });
    },

    'click #change-to-join' : function () {
        Router.go('/join');
    }
});