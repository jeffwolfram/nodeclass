const http = require('http');

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(adminRoutes);
app.use(shopRoutes);

app.use(bodyParser.urlencoded({ extended: false }));


const server = http.createServer(app);

app.listen(3000);