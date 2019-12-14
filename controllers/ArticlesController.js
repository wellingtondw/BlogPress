const Category = require('../models/Category');
const Article = require('../models/Article');
const slugify = require('slugify');

class ArticlesController {
  showSubscribeArticles(req, res) {
    Category.findAll().then(categories => {
      res.render('admin/articles/new', { categories });
    })
  }

  save(req, res) {
    const { title, body, category} = req.body

    Article.create({
      title, 
      body,
      slug: slugify(title),
      categoryId: category
    }).then(() => {
      res.redirect('/admin/articles')
    })
  }

  showArticles(req, res) {
    Article.findAll({
      include: [{ model: Category }]
    }).then(articles => {
      res.render('admin/articles', { articles });
    }).catch(err => console.log(err))
  }

  deleteArticle(req, res) {
    const { id } = req.body;

    if (id.length <= 0) return res.redirect('/admin/categories');

    if (isNaN(id)) return res.redirect('/admin/categories');

    Article.destroy({
      where: {
        id
      }
    }).then(() => res.redirect('/admin/articles'));
  }

}

module.exports = ArticlesController