const express = require("express");

const { signup, login, editProfile, changePassword, deleteProfile, verifyAccount } = require("../controllers/userController.js");
const auth = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.get('/verify/:verificationCode', verifyAccount)
router.post('/signup', signup);
router.post('/login', login);
router.patch('/:id/editProfile',auth, editProfile)
router.patch('/:id/changePassword',auth, changePassword)
router.delete('/:id/deleteProfile',auth , deleteProfile)

module.exports = router;