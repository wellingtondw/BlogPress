const Category = require('../models/Category');
const slugify = require('slugify');

class CategoriesController {

  showSubscribeCategories(req, res) {
    res.render('admin/categories/new');
  }

  save(req, res) {
    const { title } = req.body;

    if (title.length <= 0) return res.redirect('/admin/categories/new');

    Category.create({
      title,
      slug: slugify(title)
    })
      .then(() => res.redirect('/'))
      .catch(err => console.log(err));
  }
}

module.exports = CategoriesController;