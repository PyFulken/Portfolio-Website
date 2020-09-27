const Counter = require("./../models/view_count.js");
const ejs = require("ejs")

//--------------------------------------------------------------------------------------------------
//Route Handlers
//--------------------------------------------------------------------------------------------------

exports.get_homepage = async (req, res) => {
    try {
        //let counting = await Counter.create({secure: req.secure});
        let query = await Counter.find();
        res.status(200);
        res.render("homepage", {data: query.length});
    } catch (err) {
        res.status(404);
        res.send("./../views/page_not_found.html");
    }
};
