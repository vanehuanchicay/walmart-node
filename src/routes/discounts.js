const { Router } = require('express');
const discountsGet = require('../controllers/discounts');

const router = Router();

router.get('/', discountsGet);

module.exports = router;
