var express = require('express');
var router = express.Router();

/* GET home page. */
router.route('/new')
  .get(postsController.new);

router.route('/:id')
  .get(postsController.show)
  .patch(postsController.update)
  .delete(postsController.destroy);

router.route('/:id/edit')
  .get(postsController.edit);

module.exports = router;
