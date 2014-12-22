import Ember from 'ember';
import Rippleable from '../mixins/wsk-rippleable';

export default Ember.Component.extend(Rippleable, {
  classNames: ['wsk-item'],
  tagName: 'span',
  classNameBindings: [
    'ripple:wsk-js-ripple-effect',
  ],
});
