const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//refererence actibity 11, 12 for these may need to look up restful routes
router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({include: [Product,]}).then(category =>
    { 
      
      res.json(category)
     
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});


router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findByPk(req.params.id, {include: [{model: Product, }],}).then (category =>
    {
      res.json(category)
})
.catch((err) => {
  console.log(err);
  res.status(400).json(err);
});
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
