const http = require('http');

const express = require('express');

const app = express();

app.use('/users',(req, res, next) => {
    res.send('<h1>This page is for Users</h1>')
});
app.use('/',(req, res, next) => {
    res.send('<h1>This is the front page for my express page</h1>')
});

const server = http.createServer(app);

app.listen(3000);