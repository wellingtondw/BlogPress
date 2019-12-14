const express = require('express');
const router = express.Router();

const ArticlesController = require('../controllers/ArticlesController');
const articlesController = new ArticlesController();

router.get('/admin/articles/new', articlesController.showSubscribeArticles);
router.post('/admin/articles/save', articlesController.save);
router.get('/admin/articles', articlesController.showArticles);
router.post('/admin/articles/delete', articlesController.deleteArticle);


module.exports = router;