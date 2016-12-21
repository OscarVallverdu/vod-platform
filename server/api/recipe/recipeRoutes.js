var _ = require('lodash');
var recipeRouter = require('express').Router();

var recipes = [];
var id = 0;

var updateId = function(req, res, next) {
  if (!req.body.id) {
    id++;
    req.body.id = id + '';
  }
  next();
};

recipeRouter.param('id', function(req, res, next, id) {
  var recipe = _.find(recipes, {id: id});

  if (recipe) {
    req.recipe = recipe;
    next();
  } else {
    res.send();
  }
});

recipeRouter.route('/')
    .get(function(req, res){
      res.json(recipes);
    })
    .post(updateId, function(req, res) {
      var recipe = req.body;
      recipes.push(recipe);
      res.json(recipe);
    })

recipeRouter.route('/:id')
    .get(function(req, res){
      res.json(recipe || {});
    })
    .delete(function(req, res) {
      var recipe = _.findIndex(recipes, {id: req.params.id});
      if (!recipes[recipe]) {
        res.send();
      } else {
        recipes.splice(recipe, 1);
        res.json(req.recipe);
      }

      var update = req.body;
      if (update.id) {
        delete update.id
      }
    })
    .put(function(req, res) {
      var update = req.body;
      if (update.id) {
        delete update.id
      }

      var recipe = _.findIndex(recipes, {id: req.params.id});
      if (!recipes[recipe]) {
        res.send();
      } else {
        var updatedRecipe = _.assign(recipes[recipe], update);
        res.json(updatedRecipe);
      }
    })

module.exports = recipeRouter;
