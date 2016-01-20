//users/new/controller.js
import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newSubject(formData) {
            console.log('newSubject',formData);
            this.store.createRecord('subject', Object.assign({
                subjectName: 'subjectName',
                room: 'room',
                description: 'description',
            }, formData));
            this.transitionToRoute('subjects.list');
        }
    }
});
