//components/new-user-form/component.js
import Ember from 'ember';

export default Ember.Component.extend({
    users: Ember.Object.create(),
    hasErrors: false,
    actions: {
        submit() {
            console.log("submit!!!!!!!");
            if (!this.validate()) {
                return;
            }
            
            this.get('onSave')({
                mtra: this.$('#mtra').val(),
                forename: this.$('#forename').val(),
                surname: this.$('#surname').val(),
            });
        }
    },
    
    validate() {
        console.log("validate");
        var mtra = this.$('#mtra').val();
        var forename = this.$('#forename').val();
        var surname = this.$('#surname').val();
        var store = this.get('targetObject.store');
        this.set('users.mtra', mtra === '' ? 'MTRA kötelező' : '');
        this.set('users.forename', forename === '' ? 'Keresztnév kötelező' : '');
        this.set('users.surname', surname === '' ? 'Vezetéknév kötelező' : '');
        
        store.findRecord('user', { mtra: mtra }).then(function(find){
            console.log('find', find);
        });
        
        return this.get('users.mtra') === '' &&
               this.get('users.forename') === '' &&
               this.get('users.surname') === '';
        
    }
});
