console.log('Server started')
const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Сервер работает!');
});

app.get('/about', (req,res) => {
    res.send('Это учебный сервер Дмальца!');
});

app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});
