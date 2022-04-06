const RewardFetchAdmin = require("../models/voucherDetails")
const UserFetchAdmin = require("../models/userModel");
const {log} = require("nodemon/lib/utils");

async function getAllUsersAdmin(req, res) {
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
}

async function getAllRewardsAdmin(req, res) {
    try {
        const RewardFetchAdminData = await RewardFetchAdmin.find()
        if (RewardFetchAdminData && RewardFetchAdminData.length > 0) {
            const resultResponse = {
                message: 'Rewards retrieved',
                success: true,
                data: RewardFetchAdminData,
            }
            console.log(RewardFetchAdminData);
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
}

module.exports = {
    getAllRewardsAdmin,
    getAllUsersAdmin
}