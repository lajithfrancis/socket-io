const express = require('express');
const app = express();
const port = 3000;
const http = require('http').createServer();

const io = require('socket.io')(http);

io.on('connection', (socket) => {
    socket.emit('welcome', 'hello and welcome lajith');
});
http.listen(port, () => {
    console.log('server is listening:' + port);
});
