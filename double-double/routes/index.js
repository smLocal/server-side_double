var express = require('express');
var router = express.Router();
var todosController = require('../controllers/todosController.js');

/* GET home page. */
router.route('/new')
  .get(todosController.new);

  router.route('/')
 .get(todosController.index)
 .post(todosController.create);

router.route('/:id')
  .get(todosController.show)
  .patch(todosController.update)
  .delete(todosController.destroy);

router.route('/:id/edit')
  .get(todosController.edit);

module.exports = router;
