const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'nduta',
  host: 'localhost',
  database: 'Teamwork',
  password: '123456',
  port: 5432,
});

const getCategories = (request, response) => {
    pool.query("SELECT * FROM categories", (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

module.exports = {
    getCategories
};