const express = require("express");
//const mongoose = require("mongoose");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({
    "Available APIs": 3,
    "GET Pickups For User": "/user-pickups",
    "GET Pickups For Vendor": "/vendor-pickups",
    "PUT Pickup": "/update/:pickupID",
  });
});

module.exports = router;
