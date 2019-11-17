## skeleton_002
- La intención es tener una plantilla básica y minificada para trabajar con cualquier módulo/libreria de js
- webpack-dev-server ofrece el **hotreload** lo que nos hace más productivo el desarrollo ya que no tenemos que recargar la página en cada cambio

## running
```js
//dentro de: skeleton_002

//ejecutar:

//lee la configuración en package.json para instalar todos los módulos 
//en este caso solo webpack
npm install  

//lee package.json scripts.start => webpack-dev-server --open --mode=development 
//lanza el servidor en el puerto 8080
npm run start 
``` 
- ![]()

## includes:
npm i -D babel-loader babel-core babel-preset-env
npm i -D css-loader style-loader
npm i -D extract-text-webpack-plugin


- > npm install --save-dev webpack
- > npm install --save-dev webpack-cli
- > npm install --save-dev webpack-dev-server
- **módulos extra para webpack y css**
- > **babel** npm install --save-dev babel-loader @babel/core @babel/preset-env
- > **sass** npm install --save-dev sass sass-loader postcss-loader css-loade
- > **postcss** npm install --save-dev autoprefixer cssnano
- > **MiniCssExtractPlugin** npm install --save-dev mini-css-extract-plugin
- > **file-loader** npm install --save-dev file-loader

npm install --save-dev babel-minify-webpack-plugin 

npm install --save-dev html-minifier-webpack-plugin

npm install --save-dev optimize-css-assets-webpack-plugin
npm install --save-dev uglifyjs-webpack-plugin

- > Tamaño con node_modules: 
- ![]()
- > Tamaño sin node_modules: 
- ![]()


## 2019-11-17 13:21 SPAIN
- **package.json**
```js
"devDependencies": {
  "@babel/core": "^7.7.2",
  "@babel/preset-env": "^7.7.1",
  "autoprefixer": "^9.7.1",
  "babel-loader": "^8.0.6",
  "css-loader": "^3.2.0",
  "cssnano": "^4.1.10",
  "file-loader": "^4.2.0",
  "mini-css-extract-plugin": "^0.8.0",
  "postcss-loader": "^3.0.0",
  "sass": "^1.23.6",
  "sass-loader": "^8.0.0",
  "webpack": "^4.41.2",
  "webpack-cli": "^3.3.10",
  "webpack-dev-server": "^3.9.0"
},
```
- **index.js**
```js
//index.js
console.log("index.js loaded!")
import 

```
- **index.html**
```html
<!doctype html>
<html>
<head>
  <title>Webpack & Vanilla JS Skeleton 002</title>
</head>
<body>
  <h1>Webpack & Vanilla JS Skeleton 002</h1>
  <script src="main.js"></script>
</body>
</html>
```

## notes
```js
ERROR in ./src/index.css 2:4

Module parse failed: Unexpected token (2:4)
You may need an appropriate loader to handle this file type, currently no loaders are 
configured to process this file. 
See https://webpack.js.org/concepts#loaders

| /*index.css*/
> body{
|   border:1px solid blue;
| }
 @ ./src/index.js 3:0-20
```

```js
//  BABEL
npm i --save-dev babel-loader @babel/core @babel/preset-env

//  SASS
npm i --save-dev sass sass-loader postcss-loader css-loader

// POSTCSS
npm i --save-dev autoprefixer cssnano

//MiniCssExtractPlugin
npm i --save-dev mini-css-extract-plugin

// file-loader
npm i --save-dev file-loader
```