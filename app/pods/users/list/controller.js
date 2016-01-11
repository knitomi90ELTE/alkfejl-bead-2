//users/list/controller.js
import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newUser(formData) {
            console.log('users/list/controller.js newUser action')
            var user = this.store.createRecord('user', Object.assign({
                mtra: 'MTRA',
                forename: 'keresztnév',
                surname: 'vezetéknév',
            }, formData));
            user.save();
            $('.modal').modal('hide');
        },
    }
});
