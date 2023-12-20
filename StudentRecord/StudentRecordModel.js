import mongoose from "mongoose";

const StudentRecordSchema = new mongoose.Schema({
    Firstname: String,
    Lastname: String,
    Phone: String,
    Fathername: String,
    FatherPhoneno: String,
    Mothername: String,
    MotherPhoneno :String,
    LocalAddress: String,
    PermanentAddress :String,
    Photo: Object,
    Idproof: Object,
    Dob: String,
    Course: String,
    RegistrationDate: String,
    Email: String,

})


const StudentRecordModel = mongoose.model("StudentRecord" , StudentRecordSchema)
export default StudentRecordModel