const express = require('express');
const router = express.Router();

const ArticlesController = require('../controllers/ArticlesController');
const articlesController = new ArticlesController();

router.get('/admin/articles/new', articlesController.showSubscribeArticles);

module.exports = router;