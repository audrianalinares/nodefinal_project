const express = require("express");
const router = expree.Router();
const Category = require('../models/Category');

router.post('/create', async (req, res) => {
    const {title} = req.body;
    const newCategory = Category({
        title,
        createdAt: Date.now()
    });
    await newCategory.save();
    res.send(newCategory);
});

router.get('/:id', async(req, res) =>{
    const cat = await Category.findById(req.params.id);
    if (!cat) {
        res.status(404).send({
            message: 'Category not found'
        });
        return;
    }
    res.send(cat);
});

rouer.get('/', async (req, res) => {
    const cats = await Category.find({});
    res.send(cats);
})

module.exports = router;