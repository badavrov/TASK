var mongoose = require('mongoose')
var PositionModel = require('../Model/Model.js')

class positionController {
  constructor() {
    this.model = new PositionModel()
  }

  listPosition(req, res) {
    let that = this
        that.model.listPosition()
          .then(function (result) { res.json(result) })
          .catch(function (error) { res.status(400).json(error) })
  }

  updatePosition(req, res) {
    let that = this
        that.model.updatePosition(req.body, res)
          .then(function (result) { res.json(result) })
          .catch(function (error) { res.status(400).json(error) })
  }
}

module.exports = positionController
