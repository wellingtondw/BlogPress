const router = require('express').Router();

router.use('/', require('./categories'));
router.use('/', require('./articles'));
module.exports = router;