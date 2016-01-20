//user/model.js
import DS from 'ember-data';

const UserModel = DS.Model.extend({
    mtra: DS.attr('string'),
    forename: DS.attr('string'),
    surname: DS.attr('string'),
    subjects: DS.hasMany('subject')
});

export default UserModel;