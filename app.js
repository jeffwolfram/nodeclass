const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views'); //This is not really needed.It is only needed if I were to put my html files in a folder other than views


const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

const route404Controller = require('./controllers/route404')

app.use(bodyParser.urlencoded({ extended: false }));
//added part below to connect css file from folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(route404Controller.addRoute404);

app.listen(3000);