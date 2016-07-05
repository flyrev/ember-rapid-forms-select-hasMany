import Ember from 'ember';

export default Ember.Route.extend({
    setupController: function(controller, model) {
        controller.set('model', model);
        controller.set('user', this.store.createRecord('user', {name: "User_" + new Date().getTime()}));
        controller.set('users', this.store.findAll('user'));
        controller.set('artists', this.store.findAll('artist'));
    },

    init() {
        this.store.createRecord('user', {name: "flyrev"});
        this.store.createRecord('artist', {name: "Angus Young"});
        this.store.createRecord('artist', {name: "Brian Johnson"});
    },

    actions: {
        setUser(user) {
	    this.controller.set('user', user);
	},

        submit(model) {
	    model.save();
	}
    }
});
