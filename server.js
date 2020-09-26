const dotenv = require("dotenv");
dotenv.config({path: "./config.env"});
const app = require("./app.js");
const mongoose = require("mongoose");

//--------------------------------------------------------------------------------------------------
//Mongo
//--------------------------------------------------------------------------------------------------

mongoose
    .connect(process.env.MONGO_CONNECTION, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then((db) => {
        console.log("Connection established!");
    });

//--------------------------------------------------------------------------------------------------
//Server
//--------------------------------------------------------------------------------------------------

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`App is now running on port ${port}!`);
});
