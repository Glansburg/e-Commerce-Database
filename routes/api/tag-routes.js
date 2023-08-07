const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
 //referernce activities 11 and 12 may need to look online. joelg
router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({include: [Product,]}).then(tag =>
    { 
      
      res.json(tag)
     
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

  // be sure to include its associated Product data


router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
