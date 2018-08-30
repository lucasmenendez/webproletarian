<p align="center">
    <img src="assets/images/logo.svg" width="400">
</p>

# WebProletarian
Simple JavaScript framework to execute inline function into a WebWorker easily.

<br/>
<br/>

## Installation

### From Source Code
Clone or download zipped source code into `node_modules` project folder.
```sh
cd <project>/node_modules 
git clone https://github.com/lucasmenendez/webproletarian.git
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