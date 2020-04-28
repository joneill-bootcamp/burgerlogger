var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Tippy@321.',
    database: 'burger_db'
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;