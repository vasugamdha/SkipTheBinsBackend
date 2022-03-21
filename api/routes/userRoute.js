const express = require("express");
const mongoose = require("mongoose");
const user = require("../models/user");

const users = require("../models/user");

const router = express.Router();

router.get("/", (req, res) => {
  res.statusCode = 200;
  res.send({
    "available APIs": "4",
    "GET users": "/users",
    "PUT user": "/update/:id",
    "POST user": "/add",
    "GET user": "/user/:id",
    "DELETE user": "/delete/:id",
  });
});

router.get("/users", (req, res) => {
  users
    .find()
    .exec()
    .then((result) => {
      try {
        if (!result || result.length === 0) {
          res.statusCode = 404;
          res.send({ message: "Users not found!" });
        } else {
          res.statusCode = 200;
          res.send({
            message: "Users retrieved",
            success: true,
            users: result,
          });
        }
      } catch (err) {
        res.statusCode = 500;
        res.send({ message: "Users retrival failed!" });
      }
    })
    .catch((err) => {
      res.statusCode = 500;
      res.send({ message: "Something went wrong!" });
    });
});

router.get("/user/:id", (req, res) => {
  users
    .find({ _id: req.params.id })
    .exec()
    .then((result) => {
      try {
        if (!result || result.length === 0) {
          res.statusCode = 404;
          res.send({ message: "User not found!" });
        } else {
          res.statusCode = 200;
          res.send({ success: true, user: result[0] });
        }
      } catch (err) {
        res.statusCode = 500;
        res.send({ message: "User retrival failed!" });
      }
    })
    .catch((err) => {
      res.statusCode = 500;
      res.send({ message: "Something went wrong!" });
    });
});

router.post("/add", (req, res) => {
  try {
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    const newUser = new users({
      _id: mongoose.Types.ObjectId(),
      email,
      firstName,
      lastName,
    });

    newUser
      .save()
      .then((result) => {
        res.statusCode = 200;
        res.send({ message: "User added", success: true });
      })
      .catch((err) => {
        res.statusCode = 500;
        res.send({ message: "User creation failed!" });
      });
  } catch (err) {
    res.statusCode = 500;
    res.send({ message: "Something went wrong!" });
  }
});

router.put("/update/:id", (req, res) => {
  try {
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const _id = req.params.id;

    const updatedUser = {
      _id,
      email,
      firstName,
      lastName,
    };

    users.findByIdAndUpdate(_id, updatedUser, (err, user) => {
      if (err) {
        res.statusCode = 500;
        res.send({ message: "User update failed!" });
      } else {
        res.statusCode = 200;
        res.send({ message: "User updated", success: true });
      }
    });
  } catch (err) {
    res.statusCode = 500;
    res.send({ message: "Something went wrong!" });
  }
});

router.delete("/delete/:id", (req, res) => {
  try {
    const _id = req.params.id;
    user.findByIdAndDelete(_id, (err, user) => {
      if (err) {
        res.statusCode = 500;
        res.send({ message: "User deletion failed!" });
      } else {
        res.statusCode = 200;
        res.send({ message: "User deleted", success: true });
      }
    });
  } catch (err) {
    res.statusCode = 500;
    res.send({ message: "Something went wrong!" });
  }
});

module.exports = router;
