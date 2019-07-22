const mysql = require('mysql')
const connection

if (process.env.JAWDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({

    })
}

connection.connect(function(err) {
    if (err) {
        console.error("error connection: " + err.stack)
        return
    }
    console.log("connected as id " + connection.threadID)
})

module.exports = connection