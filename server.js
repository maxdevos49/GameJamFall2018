const express = require('express');
const app = express();
const http = require('http');
const ip = require('ip');
const routes = require('./GameJamFall2018/routes.js');
// const path = require('path');

const server = http.createServer(app);
const PORT = process.env.PORT || 8080;

//view engine
app.set('view engine', 'vash');
app.set('views', './GameJamFall2018/views');

console.log(__dirname);

//set the routes for the server to use
app.use('/', routes);

//start the server
server.listen(PORT, function () {
    console.log(`Web Development Club running at ${ip.address()}:${PORT}`);
});