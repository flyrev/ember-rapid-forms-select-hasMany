import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
    name: attr('string'),
    artists: hasMany('artist', { embedded: 'always', async: true })
});
