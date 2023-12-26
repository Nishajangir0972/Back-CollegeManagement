import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({

    FirstName: String,
    LastName: String,
    UserName:String,
    FatherName: String,
    MotherName: String,
    PhoneNo: String,
    Email: String,
    Password: String,





})
const AdminModel = mongoose.model("Admin", AdminSchema)
export default AdminModel