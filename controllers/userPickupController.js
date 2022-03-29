const userPickups = require("../models/userPickups");
const mongoose = require("mongoose");

const getPickups = async (req, res) => {
  userPickups
    .find(req.query)
    .exec()
    .then((result) => {
      if (!result || result.length === 0) {
        res.statusCode = 200;
        res.send({ message: "Pickups not found!" });
      } else {
        res.statusCode = 200;
        res.send({
          message: "Pickups retrieved",
          success: true,
          pickups: result,
        });
      }
    })
    .catch((err) => {
      res.statusCode = 500;
      res.send({ message: "Pickups retrieval failed!" });
    });
};

const schedulePickups = async (req, res) => {
  try {
    let pickupCount;
    const lastPickup = await userPickups
      .findOne()
      .sort({ field: "asc", _id: -1 })
      .limit(1);

    pickupCount = lastPickup ? lastPickup.pickupId + 1 : 1;

    const pickup = new userPickups({
      _id: mongoose.Types.ObjectId(),
      userId: req.body.userId,
      pickupId: pickupCount,
      date: req.body.date,
      area: req.body.area,
      wasteType: req.body.wasteType,
      boxQty: req.body.boxQty,
      wasteQty: req.body.wasteQty,
      slot: req.body.slot,
      vendor: req.body.vendor,
      batchNo: req.body.batchNo,
      address: req.body.address,
    });

    pickup
      .save()
      .then((result) => {
        res.statusCode = 200;
        res.send({ message: "Pickup successfully scheduled", success: true });
      })
      .catch((err) => {
        console.log(err);
        res.statusCode = 500;
        res.send({ message: "Pickup Schedule failed!" });
      });
  } catch (err) {
    res.statusCode = 500;
    res.send({ message: "Something went wrong!" });
  }
};

const cancelPickup = async (req, res) => {
  try {
    const id = req.params.id;
    userPickups.findOneAndDelete({ pickupId: id }, (err, pickup) => {
      if (err) {
        res.statusCode = 500;
        res.send({ message: "Pickup cancellation failed!" });
      } else {
        res.statusCode = 200;
        res.send({ message: "Pickup cancelled successfully", success: true });
      }
    });
  } catch (err) {
    res.statusCode = 500;
    res.send({ message: "Something went wrong!" });
  }
};

const trackStatus = (req, res) => {
  vendorSchedules
    .find(req.query)
    .exec()
    .then((result) => {
      try {
        if (!result || result.length === 0) {
          res.statusCode = 404;
          res.send({ message: "Pickup status not found!" });
        } else {
          res.statusCode = 200;
          res.send({
            message: "Status retrieved",
            success: true,
            status: result[0].status,
          });
        }
      } catch (err) {
        res.statusCode = 500;
        res.send({ message: "Status retrieval failed!" });
      }
    })
    .catch((err) => {
      res.statusCode = 500;
      res.send({ message: "Something went wrong!" });
    });
};

module.exports = {
  getPickups,
  schedulePickups,
  cancelPickup,
  trackStatus,
};
