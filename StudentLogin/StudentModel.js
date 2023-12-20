import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    Firstname:String,
    Lastname:String,
    Username:String,
    Fathername:String,
    Phoneno:Number,
    Email:String,
    Password:String
})

const StudentModel = mongoose.model("student" , StudentSchema)
export default StudentModel