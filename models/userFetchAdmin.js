const mongoose = require("mongoose");

const userFetchAdminSchema = {
    _id: mongoose.Schema.Types.ObjectId,
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    status: { type: String },
    contact: { type: String },
    vendorName: {type: String}
};

module.exports = mongoose.model("UerFetchAdmin", userFetchAdminSchema);
