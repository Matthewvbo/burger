const connection = require ('./connection.js')

const orm = {
    selectAll: function(tableName, cd) {
        let querySting = "SELECT * FROM ??"
        connection.query(queryString, [tableName], function(err, result){
            if (err) {
                console.log(err)
            } else {
                createImageBitmap(result)
            }
        })
    },
    insertOne: function(tableName, column, value, cb) {
        let queryString = "INSERT INTO ?? (??) VALUES (?)"
        connection.query(queryString, [tableName, column,value], function(err, result){
            if(err) {
                console.log(err)
            } else {
                cb(result)
            }
        })
    },
    updateOne: function(tableName, colVal, boolean, colName, condition, cb) {
        let queryString = "UPDATE ?? SET ??=? WHERE ??=?"
        connection.query(queryString, [tableName, colVal, boolean, colName, condition], function(err, result){
            if (err) {
                console.log(err)
            } else {
                cd(result)
            }
        })
    }
}

module.exports = orm