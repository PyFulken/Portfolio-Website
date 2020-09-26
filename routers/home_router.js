const express = require("express");
const home_controller = require("./../controllers/home_controller.js");

//--------------------------------------------------------------------------------------------------
//Routes
//--------------------------------------------------------------------------------------------------

const home_router = express.Router();

home_router.route("").get(home_controller.get_homepage);

module.exports = home_router;
