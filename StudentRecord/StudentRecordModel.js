import mongoose from "mongoose";

const StudentRecordSchema = new mongoose.Schema({
    Firstname: String,
    Lastname: String,
    Dob: String,
    Fathername: String,
    Mothername: String,
    Phone: String,
    ParentNo: String,
    Course: String,
    Gender: String,
    LocalAddress: String,
    PermanentAddress: String,
    Email: String,
    Photo: Object,
    Idproof: Object,
    RegistrationDate: String,
    City: String,
    State: String,
    PinCode: String

})


const StudentRecordModel = mongoose.model("StudentRecord", StudentRecordSchema)
export default StudentRecordModel