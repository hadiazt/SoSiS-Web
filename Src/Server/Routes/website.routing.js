const express = require('express'),
    Controller = require('../Controllers/website.controller'),

    router = express.Router();


router.get('/', Controller.index);
router.get('/love', Controller.love);
router.get('/sosis', Controller.sosis);


module.exports = router;