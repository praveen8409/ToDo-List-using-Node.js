const express = require('express');
const router = express();
const homeController = require('../controllers/homec_controller');

router.get('/',homeController.home);

module.exports = router;