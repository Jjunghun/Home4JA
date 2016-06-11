Template.postsList.events({
    'click a' : function(event){
        console.log(event.target.text);
        Session.set("target", event.target.text);
        console.log(Session.get("target"));
    }
});