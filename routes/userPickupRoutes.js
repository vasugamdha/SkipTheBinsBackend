const express = require("express");
const router = express.Router();
const userPickups = require("../models/userPickups");
const vendorSchedules = require("../models/vendorSchedules");

router.get("/pickups", (req, res) => {
  userPickups
    .find(req.query)
    .exec()
    .then((result) => {
      try {
        if (!result || result.length === 0) {
          res.statusCode = 404;
          res.send({ message: "Pickups not found!" });
        } else {
          res.statusCode = 200;
          res.send({
            message: "Pickups retrieved",
            success: true,
            pickups: result,
          });
        }
      } catch (err) {
        res.statusCode = 500;
        res.send({ message: "Pickups retrieval failed!" });
      }
    })
    .catch((err) => {
      res.statusCode = 500;
      res.send({ message: "Something went wrong!" });
    });
});

router.get("/pickups/status", (req, res) => {
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
});

module.exports = router;
