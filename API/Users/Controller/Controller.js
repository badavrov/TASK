var mongoose = require('mongoose')
var UserModel = require('../Model/Model.js')

class userController {
  constructor() {
    this.model = new UserModel()
  }

  listUsers(req, res) {
    let that = this
        that.model.listUsers()
          .then(function (result) { res.json(result) })
          .catch(function (error) { res.status(400).json(error) })
  }
  
  listUsersBig(req, res) {
    let that = this
        that.model.listUsersBig()
          .then(function (result) { res.json(result) })
          .catch(function (error) { res.status(400).json(error) })
  }

  listUsersSmall(req, res) {
    let that = this
        that.model.listUsersSmall()
          .then(function (result) { res.json(result) })
          .catch(function (error) { res.status(400).json(error) })
  }

  updateUser(req, res) {
    let that = this
        that.model.updateUser(req.body, res)
          .then(function (result) { res.json(result) })
          .catch(function (error) { res.status(400).json(error) })
  }
}

module.exports = userController
