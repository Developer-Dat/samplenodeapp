var mysql = require('mysql2')
var username = process.env.NODE_MYSQL_USERNAME
var password = process.env.NODE_MYSQL_PASSWORD
var connection = mysql.createConnection({
  // host: '172.17.0.1',
  host: 'localhost',
  user: username, 
  password: password,
  database: 'nodek8s',
})
connection.connect((err) => {
  if (err) {
    console.log('database connection error',err)
    return
  }
  console.log('Database connected')
})
module.exports = connection