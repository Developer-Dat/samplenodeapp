const express = require('express')
const fs = require('fs');
const path = require('path');

const mockData = JSON.parse(fs.readFileSync(path.join(__dirname, 'mock.json')));

const router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200).json({ msg: 'A simple node js application' })
})

router.get('/get-data', function (req, res, next) {
    res.status(200).json(mockData);
})

module.exports = router