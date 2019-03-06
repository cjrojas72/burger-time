const router = require("express").Router();
const burgerRoutes = require("./burgerRoutes");

// set up routes and prefix them
router.use("/burgers", burgerRoutes);


module.exports = router;
