const mongoose = require("mongoose");

const rewardFetchAdminSchema = {
    _id: mongoose.Schema.Types.ObjectId,
    rewardId: { type: String },
    vendorName: { type: String },
    userCount: { type: String },
    status: { type: String }
};

module.exports = mongoose.model("RewardFetchAdmin", rewardFetchAdminSchema);
