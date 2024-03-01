// db.js
const mysql = require('mysql2');
const pool = mysql.createPool({
    host: '127.0.0.1',        
    user: 'root',        
    password: 'dattu123', 
    database: 'library_management', 
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
module.exports = pool.promise();
