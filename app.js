const Category = require('./models/category');

app.get('/api/category/:id', (req, res, next) => {
    Category.findOne({
      _id: req.params.id
    }).then(
      (category) => {
        res.status(200).json(category);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  });