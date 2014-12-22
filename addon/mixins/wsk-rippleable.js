import Ember from 'ember';

export default Ember.Mixin.create({

  init: function(){
    this._super();
    this.setProperties({
      rippleRecentering: false,
      rippleContainer: null,
      rippleElement: null,
      rippleIsAnimating: null,
      rippleEvent: null,
      rippleX: null,
      rippleY: null,
    });
  },

  rippleSize: function(){
    var bound = this.get('rippleBound');
    return Math.max(bound.width, bound.height) * 2;
  }.property('rippleBound'),

  rippleBound: function(){
    return this.get('element').getBoundingClientRect();
  }.property('element'),

  rippleTransformString: function() {
    var scale, size, offset;
    offset = 'translate('+this.get('rippleX')+'px, '+this.get('rippleY')+'px)';
    if ( this.get('rippleIsAnimating') ) {
      scale = 'scale(0.0001, 0.0001)';
      size = '1px';
    } else {
      scale = 'scale(1, 1)';
      size = this.get('rippleSize') + 'px';
      if ( this.get('rippleRecentering') ) {
        offset = 'translate(' + this.get('rippleBound').width / 2 + 'px, ' +
          this.get('rippleBound').height / 2 + 'px)';
      }
    }
    return 'translate(-50%, -50%) ' + offset + scale;
  }.property('rippleX', 'rippleY', 'rippleIsAnimating'),

  rippleUpdateCoords: function() {
    var x, y, bound;
    var evt = this.get('rippleEvent');
    if (evt.pointers) {    // If using HammerJs...
      bound = evt.target.getBoundingClientRect();
      x = Math.round(evt.center.x - bound.left);
      y = Math.round(evt.center.y - bound.top);
      console.log(evt.srcEvent.clientY);
      console.log(evt.center);
    } else {     // ... else, vanilla Js
      bound = evt.currentTarget.getBoundingClientRect();
      if (evt.clientX === 0 && evt.clientY === 0) {
        x = Math.round(bound.width / 2);
        y = Math.round(bound.height / 2);
      } else {
        var clientX = evt.clientX ? evt.clientX : evt.touches[0].clientX;
        var clientY = evt.clientY ? evt.clientY : evt.touches[0].clientY;
        x = Math.round(clientX - bound.left);
        y = Math.round(clientY - bound.top);
      }
    }
    this.setProperties({ rippleX: x, rippleY: y});
  }.observes('rippleEvent'),

  rippleSwapStyles: function(){
    var transformString = this.get('rippleTransformString');
    var rippleElement = this.get('rippleElement');
    rippleElement.style.webkitTransform = transformString;
    rippleElement.style.msTransform = transformString;
    rippleElement.style.transform = transformString;
    if (this.get('rippleIsAnimating')) {
      rippleElement.style.opacity = '0.4';
      rippleElement.classList.remove('is-animating');
    } else {
      rippleElement.style.opacity = '0';
      rippleElement.classList.add('is-animating');
    }
  }.observes('rippleIsAnimating'),

  rippleInit: function(){
    // Only do this on ripple elements
    if ( !this.get('ripple') ){ return; }
    // Insert Container
    this.setProperties({
      rippleContainer: document.createElement('span'),
      rippleElement: document.createElement('span')
    });
    this.get('rippleContainer').classList.add('wsk-button__ripple-container');
    this.get('rippleElement').classList.add('wsk-ripple');
    this.get('rippleContainer').appendChild(this.get('rippleElement'));
    this.get('rippleElement').style.width = this.get('rippleSize')+'px';
    this.get('rippleElement').style.height = this.get('rippleSize')+'px';
    this.get('element').appendChild(this.get('rippleContainer'));
    // Animation control callbacks
    var endAnimation = function() {
      return this.set('rippleIsAnimating', false);
    }.bind(this);
    var startAnimation = function(evt){
      window.requestAnimationFrame(endAnimation);
      return this.setProperties({ rippleEvent: evt, rippleIsAnimating: true });
    }.bind(this);

    // Register the mousedown and touchstart events
    // TODO: Improve this
    this.on('mouseDown',startAnimation);
    //this.on('touchStart',startAnimation);
    //this.on('click',startAnimation);

  }.on('didInsertElement'),

});
