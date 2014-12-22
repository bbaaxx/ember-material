import Ember from 'ember';

export default Ember.Mixin.create({

  initShadow: function(){
    var bindingString = 'shadowClassString';
    if (this.get('classNameBindings') && this.get('classNameBindings').contains(bindingString)) {
      this.get('classNameBindings').push(bindingString);
    } else {
      this.set('classNameBindings',[bindingString]);
    }
    this.set('zPosition', this.getWithDefault('zPosition',1));
  }.on('init'),

  shadowClassString: function(){
    return 'wsk-shadow--z' + this.get('zPosition');
  }.property('zPosition')
});
