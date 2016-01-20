//subjects/list/controller.js
import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newSubject(formData) {
            var subject = this.store.createRecord('subject', Object.assign({
                subjectName: 'tárgynév',
                room: 'terem',
                description: 'leírás',
            }, formData));
            subject.save();
            $('.modal').modal('hide');
        },
    }
});
