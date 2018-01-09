const router = require("express").Router();
const cottageRoutes = require("./cottages");

// Routes
router.use("/cottages", cottageRoutes);

module.exports = router;
