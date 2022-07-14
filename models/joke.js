const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    content:{
        type: String,
        require: true,
        trim: true,
    },

});

let Joke = mongoose.model("Joke", JokeSchema);
module.exports = { Joke };