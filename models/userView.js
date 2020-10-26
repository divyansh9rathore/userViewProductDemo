const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const UserViewSchema = new Schema({
    userId : {
        type: String,
        index: true
    },
    viewDate : Date,
    productId : {
        type: String,
        index: true
    },
});

module.exports = mongoose.model('userView', UserViewSchema);

