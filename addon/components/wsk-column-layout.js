import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['wsk-column-layout'],
  wrapHack: function(){
    var INVISIBLE_WRAPPING_ELEMENT_CLASS = 'wsk-column-layout__wrap-hack';
    var INVISIBLE_WRAPPING_ELEMENT_COUNT = 3;
    var columnLayout = this.get('element');
    for (var j = 0; j < INVISIBLE_WRAPPING_ELEMENT_COUNT; j++) {
      var hiddenHackDiv = document.createElement('div');
      hiddenHackDiv.classList.add(INVISIBLE_WRAPPING_ELEMENT_CLASS);
      columnLayout.appendChild(hiddenHackDiv);
    }
  }.on('willInsertElement')
});
