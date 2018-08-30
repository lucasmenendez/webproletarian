
<p align="center">
    <img src="https://raw.githubusercontent.com/lucasmenendez/webproletarian/master/assets/images/logo.svg" width="400">
</p>

# WebProletarian 
[![npm version](https://img.shields.io/badge/npm%20package-0.1.0-green.svg)](https://www.npmjs.com/package/webproletarian)

Simple JavaScript framework to execute inline function into a WebWorker easily.

<br/>

## Installation

### Install with `npm`
```sh
npm install webproletarian
```

### Install with `yarn`
```sh
yarn add webproletarian
```

### From Source Code
Clone or download zipped source code into `node_modules` project folder.
```sh
git clone https://github.com/lucasmenendez/webproletarian.git <project>/node_modules/webproletarian
```


## Using WebProletarian
Import dist version into the `index.html` file:

```html
<script src="/node_modules/webproletarian/dist/webproletarian.js"></script>
```

Or import with ES6 `import`:
```javascript
import { WebProletarian } from 'webproletarian'
```

### Example
```javascript
import { WebProletarian } from 'webproletarian'

const labourUnion = new WebProletarian(function() {
	proletarian.read("event2", console.log);

	setInterval(() => {
		proletarian.fire("event1", "thread: ping");
	}, 1000);
});

labourUnion.read("event1", data => {
	console.log(data);
	labourUnion.fire("event2", "main: pong");
});
```