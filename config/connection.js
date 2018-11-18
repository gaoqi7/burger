var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "woaiwojia8",
    database: "burgers_db"
});
connection.connect(err =>
{
    if (err) throw err;
    console.log("Mysql server connected, the id is " + connection.threadId + "\n");
});
module.exports = connection;