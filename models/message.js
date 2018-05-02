var mongoose = require("mongoose");

var messageSchema = new mongoose.Schema({
    text:{
        type: String
    },
    author:{
        id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        name: String
    }
});

module.exports = mongoose.model("Message", messageSchema);