import express from "express";                              
import AttendenceModal from "./AttendenceModal.js";

const AttendenceRouter = express.Router()

AttendenceRouter.post("/AddAttendence" ,async(res ,req)=>{
const AddedAtd = new AttendenceModal(req.body)
const result = await AddedAtd.save()
res.json(result)

})

export default AttendenceRouter