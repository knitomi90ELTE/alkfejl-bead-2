//application/adapter.js
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'http://bead2-rest-knitomi90elte.c9users.io',
    namespace: ''
});
