const express = require('express'),
    Controller = require('../Controllers/website.controller'),

    router = express.Router();


router.get('/', Controller.main);


module.exports = router;