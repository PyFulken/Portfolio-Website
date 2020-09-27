const fs = require("fs");
const express = require("express");
const home_router = require("./routers/home_router.js");
const ejs = require("ejs")

const app = express();

//--------------------------------------------------------------------------------------------------
//Middleware
//--------------------------------------------------------------------------------------------------

app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

//--------------------------------------------------------------------------------------------------
//Routes
//--------------------------------------------------------------------------------------------------

app.use("/", home_router);

//Error Handling

app.all("*", (req, res, next) => {
    res.status(404);
    res.json({status: "Fail", error: `Cannot find ${req.originalUrl}`});
});

module.exports = app;
