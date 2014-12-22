import {
  moduleForComponent,
  test
} from 'ember-qunit';
import startApp from '../../helpers/start-app';

moduleForComponent('wsk-button', 'WskButtonComponent', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function() {
  expect(2);

  // creates the component instance
  var component = this.subject();
  equal(component._state, 'preRender');

  // appends the component to the page
  this.append();
  equal(component._state, 'inDOM');
  //console.log(this);
});

test('toggles external action on mouseup', function() {
  expect(1);
  var component = this.subject();
  var $component = this.append();
  var targetObject = {
    externalAction: function(){
      ok(true, 'external Action was called!');
    }
  };
  component.set('action', 'externalAction');
  component.set('targetObject', targetObject);
  $component.mouseup();
});
