//users/edit/controller.js
import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        modifyUser(formData) {
            console.log(formData);
            var user = this.get('model');
            user.setProperties(formData);
            return user.save().then(() => {
                this.transitionToRoute('users.list');
            });
        }
    }
});
