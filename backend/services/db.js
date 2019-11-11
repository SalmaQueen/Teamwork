const pg = require('pg');

const config = {
    user:"nduta",
    database:"Teamwork",
    password:"123456",
    port:5432,
    max:10,
    idleTimeoutMillis:30000
};

const pool = new pg.Pool(config);

pool.on('connect', () => {
    console.log('connected to the Database');
});


pool.on ('remove', () => {
    console.log('client removed');
    process.exit(0);
});

module.exports = {
    pool
};

require('make-runnable');

