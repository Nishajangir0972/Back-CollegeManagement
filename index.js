import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import StudentRouter from "./StudentLogin/StudentRouter.js";
import AdminRouter from "./Admin/AdminRouter.js";
import StudentRecordRouter from "./StudentRecord/StudentRecordRouter.js";
import EmployeeRecordRouter from "./EmployeeRecord/EmployeeRecordRouter.js";

const app = express()
const connection = mongoose.connect("mongodb+srv://nishajangir9302:nisha0972@cluster0.wamladl.mongodb.net/?retryWrites=true&w=majority")
app.use(cors())
app.use('/uploads', express.static('uploads'))
app.use(express.json())
app.use("/data" , StudentRouter)
app.use("/admindata" , AdminRouter)
app.use("/StdRecord" , StudentRecordRouter)
app.use("/EmployeeRecord" , EmployeeRecordRouter)


connection.then(()=>{
app.listen(8000 , ()=> console.log("Server has been started"))
})
.catch((err)=> console.log(err))