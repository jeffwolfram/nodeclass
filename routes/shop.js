
const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

// rootDir was created in util/path.js  and is created at top of page in const rootdir
router.get('/', productsController.getProducts );


module.exports = router;