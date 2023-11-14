const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint
//referernce activities 11 and 12 may need to look online. joelg
router.get("/", (req, res) => {
  // find all tags
  Tag.findAll({ include: [Product] })
    .then((tag) => {
      res.json(tag);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// be sure to include its associated Product data

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findByPk(req.params.id, { include: [Product] })
    .then((tag) => {
      res.json(tag);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.post("/", (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then((createdTag) => res.json(createdTag))
    .catch((err) => {
      console.log(error);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: { id: req.params.id },
  })
    .then((updatedTag) => {
      if (!updatedTag) {
        res.status(404).json({ message: "No tag found with this unique id" });
        return;
      }
      res.json({ message: "Tag was updated successfully." });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({ where: { id: req.params.id } })
    .then((deletedTag) => {
      if (!deletedTag) {
        res.status(404).json({ message: "No tag found with this unique id" });
        return;
      }
      res.json({ message: "Tag was deleted successfully." });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
