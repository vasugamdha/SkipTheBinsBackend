const mongoose = require("mongoose");

const userPickupSchema = {
  _id: mongoose.Schema.Types.ObjectId,
  userId: { type: String },
  pickupId: { type: Number },
  date: { type: String },
  area: { type: String },
  slot: { type: String },
  vendor: { type: String },
  batchNo: { type: String },
  wasteType: [String],
  wasteQty: { type: Number },
  boxQty: { type: Number },
  address: { type: String },
};
module.exports = mongoose.model("UserPickups", userPickupSchema);
