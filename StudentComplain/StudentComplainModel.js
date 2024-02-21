import mongoose from "mongoose";

const StudentComplainSchema = new mongoose.Schema({
    Firstname : String,
    RollNo: String,
    Email: String,
    MobileNo: String,
    Complaint: String

})
const StudentComplainModel = mongoose.model("Complain" , StudentComplainSchema)
export default StudentComplainModel