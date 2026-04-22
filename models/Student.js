const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: String,
    roll: Number
});

module.exports = mongoose.model("Student", studentSchema);