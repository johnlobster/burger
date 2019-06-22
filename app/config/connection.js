mysql = require("mysql");


// connect to the database
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    require("dotenv").config();
    connection = mysql.createConnection({
        host: "localhost",

        // Your port; if not 3306
        port: 3306,

        // Your username
        user: "root",

        // Your password
        password: String(process.env.MYSQL_PASSWORD),
        database: "burger_db"
    });
}

connection.connect((err) => {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    // console.log(connection);

});

module.exports = connection;
