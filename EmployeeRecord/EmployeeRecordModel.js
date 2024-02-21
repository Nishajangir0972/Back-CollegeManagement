import mongoose from "mongoose";

const EmployeeRecordSchema = new mongoose.Schema({

    Firstname: String,
    Lastname: String,
    Dob: String,
    Fathername: String,
    Mothername: String,
    Phoneno: String,
    Email: String,
    Qualification: String,
    Subject: String,
    Photo: Object,
    Idproof: Object,
    Signature: Object,
    Salary: String,
    Designation: String,
    LocalAddress: String,
    PermanentAddress: String,
    City: String,
    State: String,
    PinCode: String,
    Time: String,
    dataAdded: Boolean


})
const EmployeeRecorModel = mongoose.model("EmployeeRecord", EmployeeRecordSchema)
export default EmployeeRecorModel