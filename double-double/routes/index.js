var express = require('express');
var router = express.Router();
var todosController = require('../controllers/todosController.js');

/* GET home page. */
router.route('/')
 .get(todosController.index)
 .post(todosController.create);

router.route('/:id')
  .patch(todosController.update)
  .delete(todosController.destroy);

module.exports = router;
