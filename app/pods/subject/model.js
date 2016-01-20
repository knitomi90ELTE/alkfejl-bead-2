//user/model.js
import DS from 'ember-data';

const SubjectModel = DS.Model.extend({
    subjectName: DS.attr('string'),
    room: DS.attr('string'),
    description: DS.attr('string'),
});

export default SubjectModel;