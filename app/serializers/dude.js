import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse: function (store, primaryModelClass, payload, id, requestType) {

    //this would work normally with jscramble
    //return this._super(store, primaryModelClass, payload, id, requestType);

    //this works fine normally, but with jscramble using the ES6 spread operator
    //causes an error
    return this._super(...arguments);
  }
});

