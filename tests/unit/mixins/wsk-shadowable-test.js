import Ember from 'ember';
import WskShadowableMixin from 'ember-material/mixins/wsk-shadowable';

module('WskShadowableMixin');

// Replace this with your real tests.
test('it works', function() {
  var WskShadowableObject = Ember.Object.extend(WskShadowableMixin);
  var subject = WskShadowableObject.create();
  ok(subject);
});
