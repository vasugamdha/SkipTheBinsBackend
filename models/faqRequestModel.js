// Author : Aabhaas Jain
const mongoose = require("mongoose");

const FaqRequestSchema = new mongoose.Schema({
    oldQuestion: {
        type: String
    },
    oldAnswer: {
        type: String
    },
    newQuestion: {
        type: String
    },
    newAnswer: {
        type: String
    },
    faqId: {
        type: String
    },
    author: {
        type: String,
        default: 'vendor'
    },
    type: {
        type: String,
        enum: ['add', 'update', 'delete'],
        required: true
    }
});
const faqRequest = mongoose.model("faqRequest", FaqRequestSchema);
module.exports = faqRequest;
