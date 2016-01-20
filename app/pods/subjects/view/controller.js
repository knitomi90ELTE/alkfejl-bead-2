//subjects/view/controller.js
import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newSubject(formData) {
            this.store.createRecord('subject', Object.assign({
                subjectName: 'tárgynév',
                room: 'terem',
                description: 'leírás',
            }, formData));
            this.transitionToRoute('subjects.list');
        }
    }
});
