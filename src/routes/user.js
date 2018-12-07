var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/userController');

router.post('/register', user_controller.user_register);
router.post('/login', user_controller.user_login);
router.get('/show', user_controller.user_show);

module.exports = router;