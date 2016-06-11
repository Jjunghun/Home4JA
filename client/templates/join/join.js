Template.join.events({
    'click #front-join-submit': function (evt, tmpl) {
        var joinInfo = {
            // username : $("#front-join-username").val(),
            // password : $("#front-join-password").val()
            username: tmpl.find('input[id=front-join-username]').value,
            password: tmpl.find('input[id=front-join-password]').value
        };

        Accounts.createUser (joinInfo, function (error) {
           if (error) {
               alert("이미 존재하는 아이디입니다.");
           } else {
               alert("회원 가입이 완료되었습니다.");
               Router.go('/');
           }
        });
    },

    'click #change-to-login' : function () {
        Router.go('/');
    }
});