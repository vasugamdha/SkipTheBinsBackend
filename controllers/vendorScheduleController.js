const vendorSchedules = require("../models/vendorSchedules");
const vendorPickups = (req, res) => {
  vendorSchedules
    .find(req.query)
    .exec()
    .then((result) => {
      try {
        if (!result || result.length === 0) {
          res.statusCode = 404;
          res.send({ message: "Schedules not found!" });
        } else {
          res.statusCode = 200;
          res.send({
            message: "Schedules retrieved",
            success: true,
            schedules: result,
          });
        }
      } catch (err) {
        res.statusCode = 500;
        res.send({ message: "Schedules retrieval failed!" });
      }
    })
    .catch((err) => {
      res.statusCode = 500;
      res.send({ message: "Something went wrong!" });
    });
};

const updateStatus = (req, res) => {
  try {
    const _id = req.body._id;
    const scheduleId = req.body.scheduleId;
    const vendorId = req.body.vendorId;
    const batchNo = req.body.batchNo;
    const status = req.body.status;
    const date = req.body.date;
    const area = req.body.area;
    const slot = req.body.slot;
    const data = {
      scheduleId,
      vendorId,
      batchNo,
      status,
      date,
      area,
      slot,
    };
    vendorSchedules.findByIdAndUpdate(_id, data, (err, schedule) => {
      if (err) {
        res.statusCode = 500;
        res.send({ message: "Status update failed!" });
      } else {
        res.statusCode = 200;
        res.send({ message: "Status updated", success: true });
      }
    });
  } catch (err) {
    res.statusCode = 500;
    res.send({ message: "Something went wrong!" });
  }
};

module.exports = {
  vendorPickups,
  updateStatus,
};
