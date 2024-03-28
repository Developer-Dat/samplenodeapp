const express = require('express')


const router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200).json({ msg: 'A simple node js application' })
})


module.exports = router