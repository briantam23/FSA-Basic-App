const express = require('express');
const path = require('path');

const app = express();

const indexFile = path.join(process.cwd(), './dist/index.html');
const jsFile = path.join(process.cwd(), './dist/main.js');

app.get('/main.js', (req, res) => {
	res.status(200).sendFile(jsFile);
});

app.get('*', (req, res, next) => {
	res.status(200).sendFile(indexFile);
});

app.listen(3000, () => { console.log('Server running!'); });
