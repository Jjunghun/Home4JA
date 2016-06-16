Session.set("target", "default");
// Session.set(String key, any value);

Template.main.helpers({
    toposts: function () {
        return Posts.find({}, {sort: {createdAt: -1}});
    }
});

Template.view.helpers({
    toposts: function () {
        return Posts.find({'contentsInfo.title' : Session.get("target")});
    }
});

Template.post.events({
    'click .confirm': function () {
        var contentsInfo = {
            title : $("#new-title").val(),
            content : $("#new-content").val()
        };

        Meteor.call("addPost", contentsInfo);

        var _id = Posts.findOne({}, {sort : {createdAt : -1}})._id;

        Session.set("_id", _id);
        console.log("Session get : " + Session.get("_id"));

        Router.go('/');
    }
});

Template.postsList.events({
    'click a' : function(event){
        Session.set("target", event.target.text);
        console.log(Session.get("target"));
    }
});

Template.view.events({
    'click #delete': function () {
        console.log("Call the deletePost!");
        Meteor.call("deletePost", Session.get("_id"));
        Router.go('/');
    }
});

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

Template.loginPage.events({
    'click #change-to-join' : function () {
        Router.go('/joinPage');
    }
});

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

Template.joinPage.events({
    'click #change-to-login' : function () {
        Router.go('/loginPage');
    }
});

Template.logoutOrPost.events({
    'click #front-logout' : function () {
        Meteor.logout(function () {
            Router.go('/');
        });
    }
});

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