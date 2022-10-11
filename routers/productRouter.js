const router = require('express').Router();
const authorize = require('../middlewares/authorize');
const admin = require('../middlewares/admin');
const {
    createProduct,
    getProducts,
    getProductById,
    updateProductById,
    getPhoto,
    filterProducts
} = require('../controllers/productControllers');


router.route('/')
    .post([authorize, admin], createProduct)
    .get(getProducts)

router.route('/:id')
    .get(getProductById)
    .put([authorize, admin], updateProductById)

router.route('/photo/:id')
    .get(getPhoto)

router.route('/filter')
    .post(filterProducts);




module.exports = router;