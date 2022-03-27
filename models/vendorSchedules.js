const mongoose = require("mongoose");

const vendorSchedulesSchema = {
  _id: mongoose.Schema.Types.ObjectId,
  scheduleId: { type: String },
  vendorId: { type: String },
  trackingId: { type: String },
  batchNo: { type: String },
  status: { type: String },
  date: { type: String },
  area: { type: String },
  slot: { type: String },
};

module.exports = mongoose.model("VendorSchedules", vendorSchedulesSchema);
