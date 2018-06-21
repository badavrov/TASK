var mongoose = require('mongoose')
var Promise = require('promise')
var moment = require('moment')
var Boom = require('boom')
var Positions = require('../Schema/Schema')

class PositionModel {

    register(data, res) {
        var position = new Positions(data);
        position.save(function (error, result) {
            if (error) {
                if (res) { res.json(Boom.badRequest(error).errmsg) }
            }
            if (res) { res.json(result) }
        })
    }

    listPosition() {
        let tempArr = []
        return new Promise(function (resolve, reject) {
            Positions.find({}, function (err, position) {
                if (err) return reject(Boom.badRequest(err))
                for (let i = 0; i < position.length; i++) {

                    if (position[i].deleted === false) {
                        tempArr.push(position[i])
                    }
                }
                resolve(tempArr)
            })
                .catch(function (error) {
                    return reject(Boom.badRequest(error))
                })
        })
    }

    updatePosition(data, res) {
        return new Promise(function (resolve, reject) {
            Positions.findById({ _id: data.id }, function (err, position) {
                let dataKeys = Object.keys(data);
                for (let i = 0; i < dataKeys.length; i++) {
                    let prop = dataKeys[i]
                    let val = data[prop]

                    if (prop !== 'id') {
                        if (typeof position[prop] !== 'undefined') {
                            position[prop] = val
                        }
                    }
                }
                position.save(function (error, result) {
                    if (error) {
                        return reject(Boom.badRequest('There was a problem with updating the position'))
                    }
                    return resolve(result)
                })
            })
        })
    }
}
module.exports = PositionModel