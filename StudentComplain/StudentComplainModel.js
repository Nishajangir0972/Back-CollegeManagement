import mongoose from "mongoose";

const StudentComplainSchema = new mongoose.Schema({
    Firstname : String,
    Fathersname: String,
    Email: String,
    MobileNo: Number,
    Complaint: String

})
const StudentComplainModel = mongoose.model("Complain" , StudentComplainSchema)
export default StudentComplainModel