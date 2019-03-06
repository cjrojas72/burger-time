const db = require("../config/connection");

module.exports = {
  // find all burgers
  findAll: function (req, res) {
    db
      .query("SELECT * FROM burgers", function (err, dbData) {
        if (err) {
          console.log(err);
          return res
            .status(500)
            .json(err);
        }
        res.json(dbData);
      });
  },
  // find burger by id (this will come in req.params.id)
  findById: function (req, res) {
    db
      .query("SELECT * FROM burgers WHERE id = ?", [req.params.id], function (err, dbData) {
        if (err) {
          console.log(err);
          return res
            .status(400)
            .json(err);
        }
        res.json(dbData[0]);
      });
  },
  // insert / create new burger (takes in req.body via POST)
  createBurger: function (req, res) {
    db
      .query("INSERT INTO burgers SET ?", req.body, function (err, dbData) {
        if (err) {
          console.log(err);
          return res
            .status(400)
            .json(err);
        }
        res.json(dbData);
      });
  },
  // UPDATE/PUT a burger to mark it from not eaten to eaten (false => true),
  // this will use req.params.id to know where they're updating
  updateBurger: function (req, res) {
    // req.params => {id : 1} req.params.id => 1
    db
      .query("UPDATE burgers SET eaten = true WHERE id =?", [req.params.id], function (err, dbData) {
        if (err) {
          console.log(err);
          return res
            .status(400)
            .json(err);
        }
        res.json(dbData);
      })
  },
  // delete a burger based on its id (req.params.id)
  deleteBurger: function (req, res) {

    db.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function (err, dbData) {

        if (err) {
          console.log(err);
          return res.status(400).json(err);
        }
        res.json(dbData);
      });

  }
}