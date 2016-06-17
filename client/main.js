Template.main.helpers({
    toposts: function () {
        return Posts.find({}, {sort: {createdAt: -1}});
    }
});

Template.view.helpers({
    toposts: function () {
        var post_id = Session.get("post_id");
        return Posts.find({_id: post_id});
    }
});

Template.post.events({
    'click .confirm': function () {
        var contentsInfo = {
            startYear : $("#create-year").val(),
            workType : $("#create-type").val(),
            company : $("#create-company-name").val(),
            name : $("#create-name").val(),
            title : $("#new-title").val(),
            content : $("#new-content").val()
        };
        Meteor.call("addPost", contentsInfo);
        Router.go('/');
    }
});

Template.postsList.events({
    'click a': function(event){
        Session.set("post_id", this._id);

        var post = Posts.findOne(this._id);
        console.log("1) post.owner: " + post.owner);
        console.log("2) current owner: " + Meteor.userId());
        console.log(post.owner==Meteor.userId());
        if(post.owner==Meteor.userId()) {
            $("#modifyOrDelete").hide();
        }
    }
});

Template.view.events({
    'click #delete': function () {
        console.log("Call the deletePost!");
        alert("삭제하시겠습니까?");
        Meteor.call("deletePost", Session.get("post_id"));
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

                //Session.set("userId", Meteor.userId());
                // console.log("userId: " + Session.get("userId"));
            }
        });
    },

    'click #change-to-join' : function () {
        Router.go('/join');
    }
});

Template.loginPage.events({
    'click #change-to-join' : function () {
        Router.go('/join');
    }
});

Template.join.events({
    'click #front-join-submit': function (evt, tmpl) {
        var joinInfo = {
            // username : $("#front-join-username").val(),
            // password : $("#front-join-password").val()
            username: tmpl.find('input[id=front-join-username]').value,
            password: tmpl.find('input[id=front-join-password]').value,
            email: tmpl.find('input[id=front-join-email]').value,
            phone: tmpl.find('input[id=front-join-phone]').value
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

Template.logoutOrPost.events({
    'click #front-logout' : function () {
        Meteor.logout(function () {
            Session.set("userId", null);
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

Template.about.events({
    'click #boot':function (evt) {
        $('html, body').animate({scrollTop: $("#tips").offset().top}, 0);
        $('#tips').css('margin-bottom',750);
    }
});

Template.messages.helpers({
    messages: function () {
        return Messages.find({}, {sort: {time: -1}});
    }
});

Template.input.events = {
    'keydown input#message' : function (event) {
        if (event.which == 13) { // 13 is the enter key event

            var name = '비회원';
            var message = document.getElementById('message');

            if (message.value != '') {
                Messages.insert({
                    name: name,
                    message: message.value,
                    time: Date.now()
                });

                document.getElementById('message').value = '';
                message.value = '';
            }
        }
    }
}