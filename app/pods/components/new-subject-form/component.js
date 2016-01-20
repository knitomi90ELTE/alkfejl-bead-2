//components/new-subject-form/component.js
import Ember from 'ember';

export default Ember.Component.extend({
    subjects: Ember.Object.create(),
    hasErrors: false,
    actions: {
        submit() {
            console.log("submit!!!!!!!");
            if (!this.validate()) {
                return;
            }
            //var store = this.get('targetObject.store');
            
            this.get('onSave')({
                subjectName: this.$('#subjectName').val(),
                room: this.$('#room').val(),
                description: this.$('#description').val(),
            });
        }
    },
    
    validate() {
        console.log("validate");
        var subjectName = this.$('#subjectName').val();
        var room = this.$('#room').val();
        var description = this.$('#description').val();
        
        this.set('subjects.subjectName', subjectName === '' ? 'MTRA kötelező' : '');
        this.set('subjects.room', room === '' ? 'Keresztnév kötelező' : '');
        this.set('subjects.description', description === '' ? 'Vezetéknév kötelező' : '');
        
        return this.get('subjects.subjectName') === '' &&
               this.get('subjects.room') === '' &&
               this.get('subjects.description') === '';
        
    }
});
