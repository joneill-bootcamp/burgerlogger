// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting Burgers
  app.get("/api/burgers", function (req, res) {
    var query = {};
    if (req.query.devoured) {
      query.devoured = req.query.devoured;
    }
    db.Burger.findAll({
      where: query
    }).then(function (dbGet) {
      res.json(dbGet);
    });
  });

  // Get route for retrieving a single Burger
  app.get("/api/burgers/:id", function (req, res) {
    db.Burger.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbGet) {
      res.json(dbGet);
    });
  });

  // POST route for saving a new Burger
  app.post("/api/burgers", function (req, res) {
    db.Burger.create(req.body).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  // DELETE route for deleting a Burger
  app.delete("/api/burgers/:id", function (req, res) {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbPost) {
      res.json(dbPost);
    }).catch(function (err) {
      console.log(err);
    });
  });

  // PUT route for updating Burgers
  app.put("/api/burgers", function (req, res) {
    db.Burger.update(
      req.body, {
        where: {
          id: req.body.id
        }
      }).then(function (dbPut) {
      res.json(dbPut);
    });
  });
};