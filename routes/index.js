const router = require('express').Router();

router.get('/', (req, res) => { res.send('My Contacts')});

router.use('/contacts', require('./contacts'));

module.exports = router;