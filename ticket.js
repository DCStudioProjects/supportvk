const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TicketSchema = new Schema({
    customer: String,
    telephone: Number,
    message: String
})

const Mugger = mongoose.model("ticket", TicketSchema)

module.exports = Mugger