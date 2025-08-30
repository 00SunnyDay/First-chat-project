console.log('Server started')
const http = require('http');
const { Server } = require('socket.io');

const express = require('express');
const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

app.get('/about', (req,res) => {
    res.send('Это учебный сервер Дмальца!');
});
io.on('connection', (socket) => {
  console.log('Новое подключение:', socket.id);
});
server.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});
