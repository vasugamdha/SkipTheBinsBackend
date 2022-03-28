const faqRequest = require('../models/faqRequestModel');
const faq = require('../models/faqModel');

const getRequests = (req, res) => {
    faqRequest.find().then(_ => {
        res.status(200).json({ data: _ });
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.send({ message: "Internal Server Error!" });
    })
};

const createRequest = (req, res) => {
    faqRequest.create(req.body).then(_ => {
        res.status(200).send("Insertion successful");
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.send({ message: "Internal Server Error!" });
    });
}

const deleteRequest = (req, res) => {
    let id = req.params.id;
    faqRequest.findByIdAndDelete(id).then(_ => {
        res.status(200).send("Deletion successful");
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.send({ message: "Internal Server Error!" });
    })
};

const approveRequest = (req, res) => {
    if (req.body.type == "update") {
        faq.findByIdAndUpdate(req.body.faqId, { question: req.body.newQuestion, answer: req.body.newAnswer }).then(_ => {
            faqRequest.findByIdAndDelete(JSON.stringify(req.body._id)).then(_ => {
                res.status(200).send("Request successfully updated");
            })
        }).catch(err => {
            console.log(err);
            res.statusCode = 500;
            res.send({ message: "Internal Server Error!" });
        })
    } else if (req.body.type == "add") {
        faq.create({ question: req.body.newQuestion, answer: req.body.newAnswer }).then(_ => {
            faqRequest.findByIdAndDelete(JSON.stringify(req.body._id)).then(_ => {
                res.status(200).send("Request successfully added");
            })
        }).catch(err => {
            console.log(err);
            res.statusCode = 500;
            res.send({ message: "Internal Server Error!" });
        })
    } else if (req.body.type == "delete") {
        faq.findByIdAndDelete(req.body.faqId).then(_ => {
            faqRequest.findByIdAndDelete(JSON.stringify(req.body._id)).then(_ => {
                res.status(200).send("Request successfully added");
            })
        }).catch(err => {
            console.log(err);
            res.statusCode = 500;
            res.send({ message: "Internal Server Error!" });
        })
    }

}

module.exports = {
    getRequests,
    createRequest,
    deleteRequest,
    approveRequest
}

