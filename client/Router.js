Router.configure({
  layoutTemplate: 'main',
    waitOn: function() {return Meteor.subscribe('about');}

});

Router.route('/about', {name:'about'});
Router.route('/intro', {name:'intro'});
Router.route('/rules', {name:'rules'});
Router.route('/tips', {name:'tips'});

