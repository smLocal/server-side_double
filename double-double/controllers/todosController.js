var Todo = require('../model/todo.js');
var controller = {};

controller.index = function(req, res) {
  Todo.find({}, function(err, person) {
    if (err) {
      throw err;
    }
    res.json(todo);
  });
};





controller.create = function(req, res) {


  var todo = new Todo({
    title: req.body.todoSchema.title,
    priority: req.body.todoSchema.priority,
    difficulty: req.body.todoSchema.difficulty,
    isComplete: req.body.todoSchema.isComplete,
    createdAt: req.body.todoSchema.createdAt,
    updatedAt: req.body.todoSchema.updatedAt,
    completedOn: req.body.todoSchema.completedOn

  });


  todo.save(function(err) {
    if (err) throw err;
    res.json(todo);
  });

};

controller.destroy = function(req, res){
  var id = req.params.id;
  console.log(req.body, req.params);
  Todo.findOneAndRemove({_id: id}, function(err, doc, result){
    if (err){
      console.log(err);
    }
    console.log(err, doc, result);
    res.json({status: "deleted"});
  });
};

controller.update = function(req, res) {
  var title = req.params.tile;
  var priority = req.body.priority;
  var difficulty = req.body.difficulty;
  var isComplete = req.body.isComplete;
  var createdAt = req.body.createdAt;
  var updatedAt = req.body.updatedAt;
  var completedOn = req.body.completedOn


  Todo.findOneAndUpdate(
    {_id: id},
    { priority: priority,
      isComplete: isComplete,
      createdAt: createdAt,
      updatedAt: updatedAt,
      completedOn: completedOn


    },
    function(err, todos) {
    if (err) {
      throw err;
    }
      res.redirect('/index');
  });
};

module.exports = controller;
