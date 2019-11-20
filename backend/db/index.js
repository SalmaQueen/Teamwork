const { Pool } = require('pg');

const connectionString = 'postgres://nduta:alGaz5U5ChubwGxWPXLeyEpxfYMSvtWS@salt.db.elephantsql.com:5432/umpqdziw'

const pool = new Pool({
  connectionString: connectionString,
});


module.exports = {
  query: (text, params) => pool.query(text, params),
}