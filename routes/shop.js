
const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const adminData = require('./admin');

const router = express.Router();

// rootDir was created in util/path.js  and is created at top of page in const rootdir
router.get('/', (req, res, next) => {
  res.render('shop');
});


module.exports = router;