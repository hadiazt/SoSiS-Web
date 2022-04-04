const express = require('express'),
    Controller = require('../Controllers/website.controller'),

    router = express.Router();


router.get('/' || '/home', Controller.index);
router.get('/home', Controller.index);
router.get('/love', Controller.love);
router.get('/sosis', Controller.sosis);
router.get('/security', Controller.security);
router.get('/downloader', Controller.downloader);
router.get("/contributors", Controller.contributors);


module.exports = router;