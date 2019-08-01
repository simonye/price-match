'use strict';
//Load HTTP module
const http = require("http");
var app = require('./app');


const port = 3010;

app.set('port', port);

const server = http.createServer(app);

server.listen(port);

var io = require('socket.io')(server);
app.set('socket-io', io);
module.exports = server;
