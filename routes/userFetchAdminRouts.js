const express = require("express");
//const mongoose = require("mongoose");
const router = express.Router();
const UserFetchAdmin = require("../models/userFetchAdmin")

router.get("/get-all-users", async (req, res) => {
    try {
        const UserFetchAdminData = await UserFetchAdmin.find()
        if (UserFetchAdminData && UserFetchAdminData.length > 0) {
            const resultResponse = {
                message: 'Users retrieved',
                success: true,
                data: UserFetchAdminData,
            }
            res.status(200).send(resultResponse)
        } else {
            const errorResponse = {
                message: 'No user found! please add the user first',
                success: false,
            }
            res.status(404).send(errorResponse)
        }
    } catch (err) {
        const errorResponse = {
            message: err,
            success: false,
        }
        res.status(500).json(errorResponse)
    }
});

module.exports = router;
