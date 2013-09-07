# unitary
basic unit of measure annotations

_adj. of or relating to a unit of measure_

## usage
```js
var unitary = require('unitary')


var cents = unitary('cents')

var stickOfGum = cents(25)


stickOfGum.valueOf()
// => 25

5 * stickOfGum
// => 125

stickOfGum.unit
// => 'cents'

stickOfGum.is(cents)
// true

```

<img src="http://research.microsoft.com/en-us/um/people/akenn/units/cuyama2.jpg" />


## api


## installation

    $ npm install unitary


## running the tests

From package root:

    $ npm install
    $ npm test


## contributors

- jden <jason@denizac.org>


## license
MIT. (c) MMXIII AgileMD http://agilemd.com
