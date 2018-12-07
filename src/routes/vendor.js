var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var product_controller = require('../controllers/vendorController');



router.post('/register', product_controller.vendor_register);

router.get('/nearby/:categories', product_controller.vendor_nearby);

router.get('/nearby', product_controller.vendor_nearbyall);

router.get('/categories', product_controller.vendor_categories);

router.get('/:id', product_controller.product_details);

router.put('/:id/update', product_controller.product_update);

router.delete('/:id/delete', product_controller.product_delete);


module.exports = router;