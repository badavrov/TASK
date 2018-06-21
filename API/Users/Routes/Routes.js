var express = require('express'),
    router = express.Router(),
    passport = require('passport'),
    UserModel = require('../Model/Model'),
    UserController = require('../Controller/Controller'),
    expressValidator = require('express-validator');
    
//Register User
router.post('/users/register', function (req, res, next) {
        new UserModel().register(req.body, res)
})

//Edit User
router.put('/users/edit', function (req, res, next) {
        new UserController().updateUser(req, res)
})

//Get all Users
router.get('/users', function (req, res, next) {
    new UserController(new UserModel).listUsers(req, res)
})

//Get the bosses
router.get('/users/big', function (req, res, next) {
        new UserController(new UserModel).listUsersBig(req, res)
})

//Get the small guys
router.get('/users/small', function (req, res, next) {
        new UserController(new UserModel).listUsersSmall(req, res)
})

module.exports = router