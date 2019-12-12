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
      .then(() => res.redirect('/admin/categories'))
      .catch(err => console.log(err));
  }

  showCategories(req, res) {
    Category.findAll({})
      .then(categories => {
        res.render('admin/categories/index', { categories });
      })
      .catch(err => console.log(err));
  }

  deleteCategory(req, res) {
    const { id } = req.body;

    if (id.length <= 0) return res.redirect('/admin/categories');

    if (isNaN(id)) return res.redirect('/admin/categories');

    Category.destroy({
      where: {
        id
      }
    }).then(() => res.redirect('/admin/categories'));
  }

  editCategory(req, res) {
    const { id } = req.params;

    if (isNaN(id)) res.redirect('/admin/categories');

    Category.findByPk(id).then(category => {

      if (!category) res.redirect('/admin/categories');

      res.render('admin/categories/edit', { category });
    }).catch(err => console.log(err));
  }

  updateCategory(req, res) {
    const { title, id } = req.body

    Category.update({ title, slug: slugify(title) }, {
      where: {
        id
      }
    }).then(category => {

      res.redirect('/admin/categories');

    }).catch(err => console.log(err));
  }

}

module.exports = CategoriesController;