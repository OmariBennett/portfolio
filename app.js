'use strict'

const express = require('express'),
			path = require('path');

const app = express();


const port = 3000;
// const port = process.env.PORT || 3000;

//Seving static file to express
// app.use(express.static('public'));

// const DIR_PATH = string => path.resolve(__dirname, string);

// const PUBLIC_DIR = DIR_PATH('public/index.html'),
// 			SRC_DIR = DIR_PATH('src');

app.get('/', (req, res) => {
	res.send('<h1>Hola Word!</h1>');
});

//This expression will evaluate to 3000 unless we're deploying the out to a production environment.
app.listen(3000, () => console.log(`Server is running on ${port}!`));