const express = require("express");
//const mongoose = require("mongoose");
const router = express.Router();
const RewardFetchAdmin = require("../models/rewardFetchAdmin")

router.get("/get-all-rewards", async (req, res) => {
    try {
        const RewardFetchAdminData = await RewardFetchAdmin.find()
        if (RewardFetchAdminData && RewardFetchAdminData.length > 0) {
            const resultResponse = {
                message: 'Rewards retrieved',
                success: true,
                data: RewardFetchAdminData,
            }
            res.status(200).send(resultResponse)
        } else {
            const errorResponse = {
                message: 'No reward found! please add the reward first',
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
