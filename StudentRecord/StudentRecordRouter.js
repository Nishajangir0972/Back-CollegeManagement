import express from "express";
import StudentRecordModel from "./StudentRecordModel.js";

const StudentRecordRouter = express.Router();

StudentRecordRouter.post("/StudentRecordadd" , async(req , res)=>{
    let StudentRecord = new StudentRecordModel(req.body)
    let result = await StudentRecord.save()
    res.json(result)
})


export default StudentRecordRouter