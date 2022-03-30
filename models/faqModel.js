// Author : Aabhaas Jain
const mongoose = require("mongoose");
const FaqSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,   
        required: true
    }
});
const faq = mongoose.model("faq", FaqSchema);

module.exports = faq;