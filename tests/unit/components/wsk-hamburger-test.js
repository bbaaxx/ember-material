import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('wsk-hamburger', 'WskHamburgerComponent', {
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
});

test('click toggles self property hamburgerToggler', function(){
  expect(2);

  var component = this.subject();
  equal(component.get('hamburgerToggler'), false);

  var $component = this.append();
  $component.click();

  equal(component.get('hamburgerToggler'), true);

});

test('toggles a class name depending on property hamburgerToggler', function(){
  expect(2);

  var component = this.subject();

  component.set('hamburgerToggler', false);
  ok( /from\-arrow/.test(component.get('hamburgerClassSwapper')));

  component.set('hamburgerToggler', true);
  ok( /to\-arrow/.test(component.get('hamburgerClassSwapper')));


});
