// Author : Lokansh Gupta
const mongoose = require("mongoose");

var rewardPointsModel = require("../models/rewardPoints");
var voucherDetailsModel = require("../models/voucherDetails");
var voucherPurchasedModel = require("../models/voucherPurchased");
const User = require("../models/userModel.js");
var queryModel = require("../models/contactUsQuery");

//function to fetch all voucher details in GET call
const getVoucherDetails = (req, res) => {
  voucherDetailsModel
    .find()
    .then((result) => {
      if (voucherDetailsModel || voucherDetailsModel.length) {
        return res.status(200).json({
          success: true,
          message: "Voucher details retreived",
          voucherData: result,
        });
      }
    })
    .catch((error) => {
      console.log("Error-" + error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    });
};

//function to fetch reward points for specific customer in GET call
const getRewardPoints = (req, res) => {
  rewardPointsModel
    .find(req.query)
    .then((result) => {
      if (rewardPointsModel || rewardPointsModel.length) {
        return res.status(200).json({
          success: true,
          message: "Reward points retreived",
          rewardData: result,
        });
      }
    })
    .catch((error) => {
      console.log("Error-" + error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    });
};

//function to update reward points
const updateRewardPoints = (req, res) => {
  rewardPointsModel
    .findByIdAndUpdate(req.body._id, { points: req.body.points })
    .then((result) => {
      return res.status(201).json({
        success: true,
        message: "Reward points updated",
      });
    })
    .catch((error) => {
      console.log("Error-" + error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    });
};

//function to update reward points for complaints
const updateComplaintRewardPoints = async (req, res) => {
  const email = req.body.email;
  const userExists = await User.findOne({ email });

  if (userExists) {
    const updatedContactUs = await queryModel.findOneAndUpdate(
      { email: req.body.email },
      { points: req.body.points }
    );

    const existingPoints = await rewardPointsModel
      .findOne({ customerId: userExists._id.toString() })
      .exec();
    if (existingPoints) {
      rewardPointsModel
        .findOneAndUpdate(
          { customerId: userExists._id.toString() },
          { points: existingPoints.points + req.body.points }
        )
        .then((result) => {
          return res.status(200).json({
            success: true,
            message: "Reward points updated",
          });
        })
        .catch((error) => {
          console.log("Error-" + error);
          return res.status(500).json({
            success: false,
            message: "Internal Server Error",
          });
        });
    } else {
      const newRewardPoints = new rewardPointsModel({
        _id: mongoose.Types.ObjectId(),
        customerId: userExists._id.toString(),
        points: req.body.points,
      });

      newRewardPoints
        .save()
        .then((result) => {
          return res.status(200).json({
            success: true,
            message: "Reward points updated",
          });
        })
        .catch((err) => {
          console.log("Error-" + err);
          return res.status(500).json({
            success: false,
            message: "Internal Server Error",
          });
        });
    }
  } else {
    return res.status(200).json({
      success: true,
      message: "User does not exist",
    });
  }
};

module.exports = {
  getVoucherDetails,
  getRewardPoints,
  updateRewardPoints,
  updateComplaintRewardPoints,
};
