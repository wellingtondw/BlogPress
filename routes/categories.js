const express = require('express');
const router = express.Router();

const CategoriesController = require('../controllers/CategoriesController');
const categoriesController = new CategoriesController();

router.get('/admin/categories/new', categoriesController.showSubscribeCategories);
router.post('/admin/categories/save', categoriesController.save);
router.get('/admin/categories', categoriesController.showCategories);

module.exports = router;