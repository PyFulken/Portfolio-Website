const mongoose = require("mongoose");

const view_counter = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    secure: {
        type: Boolean,
    },
});

const Counter = mongoose.model("Counter", view_counter);

module.exports = Counter;
