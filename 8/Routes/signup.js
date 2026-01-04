var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('SignUp Page');
});

router.post('/', (req, res) => {
    res.send('Signup Page');
});

module.exports = router;
