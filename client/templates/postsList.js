Template.postsList.events({
    'click a' : function(event){
        Session.set("target", event.target.text);
        console.log(Session.get("target"));
    }
});