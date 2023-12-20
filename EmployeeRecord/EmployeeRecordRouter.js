import  express  from "express";
import EmployeeRecordModel from '../EmployeeRecord/EmployeeRecordModel.js'

const EmployeeRecordRouter = express.Router()

EmployeeRecordRouter.post("/EmployeeRecordadd", async(req,res)=>{
let EmployeeRecord = new EmployeeRecordModel(req.body)
let result = await EmployeeRecord.save()
res.json(result)


})
export default EmployeeRecordRouter