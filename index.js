import dotenv from 'dotenv'
dotenv.config()
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import StudentRouter from "./StudentLogin/StudentRouter.js";
import AdminRouter from "./Admin/AdminRouter.js";
import StudentRecordRouter from "./StudentRecord/StudentRecordRouter.js";
import EmployeeRecordRouter from "./EmployeeRecord/EmployeeRecordRouter.js";

const app = express()


const connection = mongoose.connect(process.env.MONGO_URL)
app.use(cors())
app.use('/uploads', express.static('uploads'))
app.use(express.json())
app.use("/data" , StudentRouter)
app.use("/admindata" , AdminRouter)
app.use("/StdRecord" , StudentRecordRouter)
app.use("/EmployeeRecord" , EmployeeRecordRouter)


connection.then(()=>{
app.listen( process.env.POST ||8000 , ()=> console.log("Server has been started"))
})
.catch((err)=> console.log(err))