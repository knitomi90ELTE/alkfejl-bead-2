//users/new/controller.js
import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newUser(formData) {
            console.log('newUser',formData);
            this.store.createRecord('user', Object.assign({
                mtra: 'mtra',
                forename: 'forename',
                surname: 'surname',
            }, formData));
            this.transitionToRoute('users.list');
        }
    }
});
