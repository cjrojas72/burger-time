const router = require("express").Router();
const burgerController = require("../../controllers/burgerController");

// define API routes

router
  .route("/")
  .get(burgerController.findAll)
  .post(burgerController.createBurger);


router
  .route("/:id")
  .get(burgerController.findById)
  .put(burgerController.updateBurger)
  .delete(burgerController.deleteBurger);

module.exports = router;
