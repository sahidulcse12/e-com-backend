const router = require('express').Router();
const { createCategory, getCategory } = require('../controllers/categoryControllers');
const authorize = require('../middlewares/authorize');
const admin = require('../middlewares/admin');

router.route('/')
    .post([authorize, admin], createCategory)
    .get(getCategory)

module.exports = router;