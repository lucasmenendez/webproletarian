<p align="center">
    <img src="assets/images/logo.svg" width="400">
</p>

# WebProletarian
Simple JavaScript framework to execute inline function into a WebWorker easily.

<br/>
<br/>

## Installation

### From Source Code
1. Clone or download zipped source code into `node_modules` project folder.
```sh
cd <project>/node_modules 
git clone https://github.com/lucasmenendez/webproletarian.git
```

2. Get into the library folder and install required dependencies.
```sh
cd webproletarian && npm install
```

3. Build library
```sh
npm run build
```


## Using WebProletarian
Import minified version into the `index.html` file:

```html
<script src="/node_modules/webproletarian/dist/webproletarian.js>
```

Or import with ES6 `import`:
```javascript
import WebProletarian from 'webproletarian'
```