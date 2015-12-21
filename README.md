
# React Couple

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Dependency Status][david-image]][david-url]
[![Downloads][downloads-image]][downloads-url]

Coupling your children(component) in your parent component in React.

## Install

```sh
$ npm install react-couple --save
```

## Usage

```jsx
const couple = require('react-couple');
class ExampleApp extends React.Component {
  render() {
    <div>
      <input ref={couple.bind(this)} 
        onChange={this.onChange.bind(this)} 
      />
    </div>
  }
  onChange(evt) {
    // when you inputs something, just directly access to it
    // by the following way
    console.log(this.components.input.value);
  }
}
```

## How it works

React-Couple handles with the `ref` function in the main component and add the corresponding child
to `this.components` and let you access to them in other functions.

## License

MIT

[npm-image]: https://img.shields.io/npm/v/react-couple.svg?style=flat-square
[npm-url]: https://npmjs.org/package/react-couple
[travis-image]: https://img.shields.io/travis/weflex/react-couple.svg?style=flat-square
[travis-url]: https://travis-ci.org/weflex/react-couple
[david-image]: http://img.shields.io/david/weflex/react-couple.svg?style=flat-square
[david-url]: https://david-dm.org/weflex/react-couple
[downloads-image]: http://img.shields.io/npm/dm/react-couple.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/react-couple