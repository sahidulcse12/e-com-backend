const router = require('express').Router();
const {
    getCartItem,
    createCartItem,
    updateCartItem,
    deleteCartItem
} = require('../controllers/cartControllers');
const authorize = require('../middlewares/authorize');



router.route('/')
    .post(authorize, createCartItem)
    .get(authorize, getCartItem)
    .put(authorize, updateCartItem)


router.route('/:id')
    .delete(authorize, deleteCartItem)

module.exports = router;