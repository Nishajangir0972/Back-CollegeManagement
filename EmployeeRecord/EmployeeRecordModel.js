import mongoose from "mongoose";

const EmployeeRecordSchema = new mongoose.Schema({

Firstname : String,
Lastname : String,
Phone : Number,
Fathername : String,
FatherPhoneno :String,
Mothername : String,
MotherPhoneno : String,
LocalAddress : String,
PermanentAdress : String,
Photo :Object,
Idproof : Object,
Dob : String,
Quelification : String,
Registration: String,
Email : String,
Designation : String,
Salary : String,
Signation : String,
Subject : String,
Time : Number,
Hours : Number,
UserName : String,
Password :String,
Gender : String


})
 const EmployeeRecorModel = mongoose.model("EmployeeRecord" ,EmployeeRecordSchema) 
  export default EmployeeRecorModel