const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views'); //This is not really needed.It is only needed if I were to put my html files in a folder other than views


const adminData = require('./routes/admin');

const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
//added part below to connect css file from folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,  'views', '404-page.html'));
});

app.listen(3000);