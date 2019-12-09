const express = require('express');
const router = express.Router();

const CategoriesController = require('../controllers/CategoriesController');
const categoriesController = new CategoriesController();

router.get('/admin/categories/new', categoriesController.showSubscribeCategories);

module.exports = router;