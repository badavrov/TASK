var express = require('express'),
    router = express.Router(),
    passport = require('passport'),
    PositionModel = require('../Model/Model'),
    PositionController = require('../Controller/Controller'),
    expressValidator = require('express-validator');
    
//Register Position
router.post('/positions/register', function (req, res, next) {
        new PositionModel().register(req.body, res)
})

//Edit Position
router.put('/positions/edit', function (req, res, next) {
        new PositionController().updatePosition(req, res)
})

//Get all Positions
router.get('/positions', function (req, res, next) {
    new PositionController(new PositionModel).listPosition(req, res)
})

module.exports = router