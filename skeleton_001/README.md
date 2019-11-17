## skeleton_001
- La intención es tener una plantilla básica y minificada para trabajar con cualquier módulo/libreria de js
- webpack-dev-server ofrece el **hotreload** lo que nos hace más productivo el desarrollo ya que no tenemos que recargar la página en cada cambio

## running
```js
//dentro de: skeleton_001

//ejecutar:

//lee la configuración en package.json para instalar todos los módulos 
//en este caso solo webpack
npm install  

//lee package.json scripts.start => webpack-dev-server --open --mode=development 
//lanza el servidor en el puerto 8080
npm run start 
``` 
- ![](https://trello-attachments.s3.amazonaws.com/5dd13bb322fd19618bbe8e21/1126x184/807dd4195579fc7ab78e3bbca98cb2c2/image.png)

## includes:
- > npm install --save-dev webpack
- > npm install --save-dev webpack-cli
- > npm install --save-dev webpack-dev-server
- > Tamaño con node_modules: 
- ![](https://trello-attachments.s3.amazonaws.com/5dd13bb322fd19618bbe8e21/343x101/c7d8da28da8a290fcee29d6eaeed0b51/image.png)
- > Tamaño sin node_modules: 
- ![](https://trello-attachments.s3.amazonaws.com/5dd13bb322fd19618bbe8e21/260x70/8a3c9ef6a743710054fb584870d77428/image.png)


## 2019-11-17 13:21 SPAIN
- **package.json**
```js
"devDependencies": {
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.10",
    "webpack-dev-server": "^3.9.0"
},
```
- **index.js**
```js
//index.js
console.log("index.js loaded!")
```
- **index.html**
```html
<!doctype html>
<html>
<head>
  <title>Webpack & Vanilla JS Skeleton 001</title>
</head>
<body>
  <h1>Webpack & Vanilla JS Skeleton 001</h1>
  <script src="main.js"></script>
</body>
</html>
```