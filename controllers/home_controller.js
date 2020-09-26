const Counter = require("./../models/view_count.js");

//--------------------------------------------------------------------------------------------------
//Route Handlers
//--------------------------------------------------------------------------------------------------

exports.get_homepage = async (req, res) => {
    try {
        let counting = await Counter.create({secure: req.secure});
        let query = await Counter.find();
        console.log("what");
        res.status(200);
        res.send("The database contains " + query.length + " entries.");
    } catch (err) {
        res.status(404);
    }
};

exports.get_homepage = async (req, res) => {
    try {
        let counting = await Counter.create({secure: req.secure});
        let query = await Counter.find();
        console.log("what");
        res.status(200);
        res.send("The database contains " + query.length + " entries.");
    } catch (err) {
        res.status(404);
    }
};
