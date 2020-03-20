const router = require('express').Router();
const { getBalance, createBalance } = require('../controllers/balance');

router.route('/').get(getBalance).post(createBalance);

module.exports = router;
