const userModel = require('../models/userDataModel')

async function createUser(req, res) {
    try {
        const data = req.body
        const days = {
            0: "Sunday",
            1: "Monday",
            2: "Tuesday",
            3: "Wednesday",
            4: "Thrusday",
            5: "Friday",
            6: "Saturday"
        }
        data.day = days[new Date().getDay()]

        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const formattedToday = dd + '/' + mm + '/' + yyyy
        data.date = formattedToday

        const createdDoc = await userModel.create(data)
        return res.status(201).send({ msg: "successfully created", data: createdDoc })
    }
    catch (err) {
        return res.status(500).send({ msg: err.message })
    }
}

async function getUsers(req, res) {
    try {
        const Docs = await userModel.find()
        return res.status(201).send(Docs)
    }
    catch (err) {
        return res.status(500).send({ msg: err.message })
    }
}

module.exports = { createUser, getUsers }