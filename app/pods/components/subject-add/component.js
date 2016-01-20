//components/subject-add/component.js
import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        removeSubject(subject) {
            console.log('removeSubject');
        },
        addSubject(subject){
            console.log('addSubject');
        }
    }
});
