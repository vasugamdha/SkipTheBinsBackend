const mongoose = require("mongoose");

const querySchema = {
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String },
  email: { type: String },
  mobile: { type: String },
  query: { type: String },
};

module.exports = mongoose.model("ContactUsQuery", querySchema);