const mongoose = require("mongoose");

const vendorFetchAdminSchema = {
    _id: mongoose.Schema.Types.ObjectId,
    vendorName: { type: String },
    email: { type: String },
    status: { type: String },
    contact: { type: String }
};

module.exports = mongoose.model("VendorFetchAdmin", vendorFetchAdminSchema);
