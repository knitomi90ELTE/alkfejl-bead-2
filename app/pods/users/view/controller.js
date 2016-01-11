//users/view/controller.js
import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newUser(formData) {
            console.log(formData);
            this.store.createRecord('user', Object.assign({
                mtra: 'MTRA',
                forename: 'keresztnév',
                surname: 'vezetéknév',
            }, formData));
            console.log('record created');
            this.transitionToRoute('users.list');
        }
    }
});
