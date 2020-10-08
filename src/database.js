const mysql = require('mysql');

const { promisify } = require('util');

const { database } = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if (err){
        if (err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        if (err.code === 'ER_CON_COUNT_ERROR'){
            console.error('DATABASE_HAS_TO_MANY_CONNECTION');
        }
        if (err.code === 'ECONNREFUSED'){
            console.error('DATABASE_CONNECTION_WAS_REFUSED');
        }
    }
    if (connection) connection.release();
    console.log('DB is Connected');
    return;
});

// Convirtiendo a Promesas
pool.query = promisify(pool.query);

module.exports = pool;