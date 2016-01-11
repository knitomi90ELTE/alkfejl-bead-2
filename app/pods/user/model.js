//user/model.js
import DS from 'ember-data';

const UserModel = DS.Model.extend({
    mtra: DS.attr('string'),
    forename: DS.attr('string'),
    surname: DS.attr('string'),
    //subjects: DS.attr('array'),
});

UserModel.reopenClass({

});

export default UserModel;