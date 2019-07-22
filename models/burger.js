const orm = require('../config/orm.js')
const express = require('express')
const app = express()

const burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res)
        })
    },
    insertOne: function(value, cb) {
        orm.insertOne('burgers', 'burger_name', value, function(res){
            cb(res)
        })
    },
    updateOne: function(condition, cb) {
        orm.insertOne('burgers', 'devoured', '1', 'id', condition, function(res){
            cb(res)
        })
    }

}
module.exports = burger