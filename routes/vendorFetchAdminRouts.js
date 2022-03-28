const express = require("express");
//const mongoose = require("mongoose");
const router = express.Router();
const VendorFetchAdmin = require("../models/vendorFetchAdmin")

router.get("/get-all-vendors", async (req, res) => {
    try {
        const VendorFetchAdminData = await VendorFetchAdmin.find()
        if (VendorFetchAdminData && VendorFetchAdminData.length > 0) {
            const resultResponse = {
                message: 'Vendors retrieved',
                success: true,
                data: VendorFetchAdminData,
            }
            res.status(200).send(resultResponse)
        } else {
            const errorResponse = {
                message: 'No vendor found! please add the vendor first',
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
