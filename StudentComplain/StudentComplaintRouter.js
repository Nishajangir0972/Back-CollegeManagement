import express from "express"
import StudentComplainModel from "./StudentComplainModel.js"

const StudentComplaintRouter = express.Router()

StudentComplaintRouter.post ("/Student", async(req , res )=>{
    let ComplainToStudent = new StudentComplainModel(req.body)
    let result= await ComplainToStudent.save()
    res.json(result)
})


StudentComplaintRouter.get("/showComplain" ,async(req,res)=>{
    let result =await StudentComplainModel.find()
    res.json(result)

})
export default StudentComplaintRouter