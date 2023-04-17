const express = require("express");
const { getUsers, createUser } = require("../components/userController");
const router = express.Router();

//==============================USER APIS======================================


router.get("/getusersdata", getUsers);
router.post("/createuserdata", createUser);

module.exports = router;