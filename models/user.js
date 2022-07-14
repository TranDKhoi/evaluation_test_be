const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true,
    },
    jokeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Joke",
    },
    vote: {
        type: String,
    },
    jokeIndex: {
        type: Number,
        require: true,
        validate: {
            validator: (val) => {
                if (val < 0 || val > 3) {
                    return false;
                }
            }
        },
        message: "Invalid joke index",
    }
})

let User = mongoose.model("User", UserSchema);
module.exports = { User };