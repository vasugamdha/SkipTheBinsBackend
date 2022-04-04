// Author : Lokansh Gupta
const mongoose = require("mongoose");

const querySchema = {
  _id: mongoose.Schema.Types.ObjectId,
  companyName: { type: String },
  value: { type: String },
  points: { type: String },
  customerId: { type: String },
  datePurchased: { type: String },
};

module.exports = mongoose.model("VouchersPurchased", querySchema);
