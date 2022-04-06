// Author : Aabhaas Jain
const faq = require("../models/faqModel");

const getFaq = (req, res) => {
  faq
    .find()
    .then((_) => {
      res.status(200).json({ data: _ });
    })
    .catch((err) => {
      console.log(err);
      res.statusCode = 500;
      res.send({ message: "Internal Server Error!" });
    });
};

const deleteFaq = (req, res) => {
  let id = req.params.id;
  faq
    .findByIdAndDelete(id)
    .then((_) => {
      res.status(200).send("Deletion successful");
    })
    .catch((err) => {
      console.log(err);
      res.statusCode = 500;
      res.send({ message: "Internal Server Error!" });
    });
};

const createFaq = (req, res) => {
  faq
    .create(req.body)
    .then((_) => {
      res.status(200).send("Insertion successful");
    })
    .catch((err) => {
      console.log(err);
      res.statusCode = 500;
      res.send({ message: "Internal Server Error!" });
    });
};

const updateFaq = (req, res) => {
  res.body;
  faq
    .findByIdAndUpdate(req.params.id, req.body)
    .then((_) => {
      res.status(200).send("Updation successful");
    })
    .catch((err) => {
      console.log(err);
      res.statusCode = 500;
      res.send({ message: "Internal Server Error!" });
    });
};

module.exports = {
  createFaq,
  getFaq,
  updateFaq,
  deleteFaq,
};
