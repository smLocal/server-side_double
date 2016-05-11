var Todo = require('../model/todo.js');
var controller = {};

controller.index = function(req, res) {
  Todo.find({}, function(err, person) {
    if (err) {
      throw err;
    }
    res.json(person);
  });
};

controller.show = function(){
};

controller.new = function(req, res) {
  res.render('new');
};

controller.create = function(req, res) {

  var todo = new Todo({
    firstName: req.body.personSchema.firstName,
    lastName: req.body.personSchema.lastName,
    item: req.body.personSchema.item,
    email: req.body.personSchema.email,
    comment: req.body.personSchema.comment,
    timeCheckedOut: req.body.personSchema.timeCheckedOut
  });


  person.save(function(err) {
    if (err) throw err;
    res.redirect('/');
  });

};
controller.destroy = function(req, res){
  var id = req.params.id;
  console.log(req.body, req.params);
  Equipment.findOneAndRemove({_id: id}, function(err, doc, result){
    if (err){
      console.log(err);
    }
    console.log(err, doc, result);
    res.json({status: "deleted"});
  });
};

controller.update = function(req, res) {
};

module.exports = controller;
