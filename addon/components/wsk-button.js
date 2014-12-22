import Ember from 'ember';
import Rippleable from '../mixins/wsk-rippleable';

export default Ember.Component.extend(Rippleable, {
  classNames: ['wsk-button wsk-js-button'],
  tagName: 'button',
  classNameBindings: [
    'ripple:wsk-js-ripple-effect',
    'raised:wsk-button--raised',
    'colored:wsk-button--colored',
    'fab:wsk-button--fab',
    'icon:wsk-button--icon'
  ],
  ripple: false,
  raised: false,
  colored: false,
  fab: false,
  icon: false,

  actionHandler: function(){
    this.$().blur();
    this.sendAction();
  }.on('mouseUp')

});
