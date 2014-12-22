import Ember from 'ember';
import WskRippleableMixin from 'ember-material/mixins/wsk-rippleable';

module('WskRippleableMixin');

// Replace this with your real tests.
test('it works', function() {
  var WskRippleableObject = Ember.Object.extend(WskRippleableMixin);
  var subject = WskRippleableObject.create();
  ok(subject);
});
