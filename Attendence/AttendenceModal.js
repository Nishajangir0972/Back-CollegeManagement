import mongoose from "mongoose";

const Attendence = new mongoose.Schema({
    class: String,
    Year: String,
    Attendence: [{
        Date: Number,
        Record: {
            present: { type: Boolean, default: false },
            absent: { type: Boolean, default: false }
        }
    }]


})

const AttendenceModal = mongoose.model("Attendence", Attendence)
export default AttendenceModal