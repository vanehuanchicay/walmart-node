const { Router } = require('express');
const productGet = require('../controllers/products');

const router = Router();

router.get('/', productGet );
  
module.exports = router;
