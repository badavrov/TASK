var mongoose = require('mongoose')
var Promise = require('promise')
var moment = require('moment')
var Boom = require('boom')
var User = require('../Schema/Schema')

class UserModel {

    register(data, res) {
        var user = new User(data);
        user.save(function (error, result) {
            if (error) {
                if (res) { res.json(Boom.badRequest(error).errmsg) }
            }
            if (res) { res.json(result) }
        })
    }

    listUsers() {
        let tempArr = []
        return new Promise(function (resolve, reject) {
            User.find({}, function (err, users) {
                if (err) return reject(Boom.badRequest(err))
                for (let i = 0; i < users.length; i++) {

                    if (users[i].deleted === false) {
                        tempArr.push(users[i])
                    }
                }
                resolve(tempArr)
            })
                .catch(function (error) {
                    return reject(Boom.badRequest(error))
                })
        })
    }

    listUsersBig() {
        let tempArr = []
        return new Promise(function (resolve, reject) {
            User.find({}, function (err, users) {
                if (err) return reject(Boom.badRequest(err))
                for (let i = 0; i < users.length; i++) {

                    if (users[i].deleted === false && users[i].big === true) {
                        tempArr.push(users[i])
                    }
                }
                resolve(tempArr)
            })
                .catch(function (error) {
                    return reject(Boom.badRequest(error))
                })
        })
    }

    listUsersSmall() {
        let tempArr = []
        return new Promise(function (resolve, reject) {
            User.find({}, function (err, users) {
                if (err) return reject(Boom.badRequest(err))
                for (let i = 0; i < users.length; i++) {

                    if (users[i].deleted === false && users[i].big === false) {
                        tempArr.push(users[i])
                    }
                }
                resolve(tempArr)
            })
                .catch(function (error) {
                    return reject(Boom.badRequest(error))
                })
        })
    }

    updateUser(data, res) {
        return new Promise(function (resolve, reject) {
            User.findById({ _id: data.id }, function (err, user) {
                let dataKeys = Object.keys(data);
                for (let i = 0; i < dataKeys.length; i++) {
                    let prop = dataKeys[i]
                    let val = data[prop]

                    if (prop !== 'id') {
                        if (typeof user[prop] !== 'undefined') {
                            user[prop] = val
                        }
                    }
                }
                user.save(function (error, result) {
                    if (error) {
                        return reject(Boom.badRequest('There was a problem with updating the user'))
                    }
                    return resolve(result)
                })
            })
        })
    }
}
module.exports = UserModel