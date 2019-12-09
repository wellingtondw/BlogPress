const express = require('express');
const router = express.Router();

const CategoriesController = require('../controllers/CategoriesController');
const categoriesController = new CategoriesController();

router.get('/admin/categories/new', categoriesController.showSubscribeCategories);
router.post('/admin/categories/save', categoriesController.save);

module.exports = router;