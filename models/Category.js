const pg = require('pg');

const categorySchema = pg.Schema({
  name: { type: String, required: true },
  categoryId: { type: String, required: true },  
});

module.exports = pg.model('Category', categorySchema);