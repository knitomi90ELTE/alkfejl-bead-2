//components/subject-list/component.js
import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        deleteSubject(subject) {
            subject.deleteRecord();
            subject.save();
        }
    }
});
