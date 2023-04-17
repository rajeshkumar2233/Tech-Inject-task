const mongoose = require('mongoose')

const userDataSchema = mongoose.Schema(
    {
        name: String,
        mobile: Number,
        image: String,
        day: {
            type: String,
        },
        date: {
            type: String,
        },
        deductions: [
            {
                inTime: String,
                outTime: String,
                deduction: Number
            }
        ]
    }
)

module.exports = mongoose.model("userData", userDataSchema)