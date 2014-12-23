# ember-material
### Wrapper components for google's [web starter kit](https://github.com/google/web-starter-kit/) material design elements. 

**Note:** expect periodic breaking changes since we're following the development of the material-sprint branch of wsk.

____

This is an ember-cli addon containing a collection of [ember js](http://emberjs.com/) 
components wrapping/adapting the vanilla javascript that powers the material 
design elements included in the future release of Google's 
[Web Starter Kit](https://github.com/google/web-starter-kit/).

The aim if this project is to keep some compatibility with the default WSK,
if you need something that replaces the javascript with more native ember
code check [ember-paper](https://github.com/miguelcobain/ember-paper).

## Current version
v0.1.0 - Initial version
  * button, card, column-layout, item, shadow elements
  * ripple and shadow mixins

## Installation
From the root fo your ember-cli project do:

    npm install ember-material --save-dev

## Usage


### wsk-button
- Properties (can be mixed)
  - `action`    (default: null)   : Default to trigger on button press
  - `raised`    (default: false)  : raised button, false creates a flat button
  - `colored`   (default: false)  : apply default color styles
  - `ripple`    (default: false)  : enable ripple effect
  - `fav`       (default: false)  : create a FAV button (do not mix with `icon`)
  - `icon`      (default: false)  : create icon button (do not mix with `fav`)

Example:

    {{#wsk-button action="someAction"

      ripple=true
      colored=true
      raised=true

    }} Button text {{/wsk-button}}


### wsk-column-layout

Example:

    {{#wsk-column-layout}}
      <div class="some-class">
        ...
      </div>
      <div class="other-class">
        ...
      </div>
      <div class="another-class">
        ...
      </div>
    {{/wsk-column-layout}}

### wsk-card

Example:

    {{#material-card}}

      {{#material-card-image}}
        <img src="some_image.png" alt="">
      {{/material-card-image}}

      {{#material-card-heading}}
        stuff
      {{/material-card-heading}}

      {{#material-card-caption}}
        more stuff
      {{/material-card-caption}}

      {{#material-card-lower}}
        lots of stuff
      {{/material-card-lower}}

      {{#material-card-bottom}}
        some action
      {{/material-card-bottom}}

    {{/material-card}}


### wsk-item

- Properties
  - `ripple`    (default: false)  : enable ripple effect

Example:
    {{#wsk-item ripple=true}} item text {{/wsk-item}}


### wsk-shadow

- Properties
  - `zPosition`    (default: 1)   : element depth for shadowing

Example:

    {{#wsk-shadow zPosition=2}}
      <div>Some stuff</div>
    {{/wsk-shadow}}


####More to come soon ...

----

## Contributing

If you want to contribute, well ... thank you! 

Issues and PR's are welcome, the information below will be useful to you:

### Development setup

#### Requirements
  -Node js
  -Bower
  -node-sass-cli (globally for scripting)

*NOTE: for now, you need to install node-sass-cli for the wsk styles, I hope I 
find a better way to build soon  

* `git clone` this repository
* `npm install`
* `bower install`

### Refresh the stylesheets
    
    ./scripts/build-wsk-styles.sh

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
