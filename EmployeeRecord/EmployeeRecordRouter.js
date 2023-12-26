import express from "express";
import EmployeeRecordModel from '../EmployeeRecord/EmployeeRecordModel.js'
import multer from "multer";
import path from "path";

const EmployeeRecordRouter = express.Router()

const storage = multer.diskStorage({
    destination: "uploads/",
    filename: function (req, file, callback) {
        const ext = path.extname(file.originalname);
        const filename = req.body.Firstname + ext;
        callback(null, filename)
    }
})
const uploadPhoto = multer({ storage: storage });
// const uploadIdproof = multer({ storage: storage });
// const uploadsignature = multer({ storage: storage });



EmployeeRecordRouter.post("/EmployeeRecordadd", uploadPhoto.fields([
    {name: 'Photo' , maxCount: 1},
    {name: 'Idproof' , maxCount: 1},
    {name: 'Signature' , maxCount: 1},

]),  async (req, res) => {
    const { Firstname, Lastname, Dob, Fathername, Mothername, Phoneno, Email, Qualification, Subject, Salary, Designation, LocalAddress, PermanentAddress, City, State, PinCode, Time } = req.body
    const Photo = req.files.Photo;
        const Idproof = req.files.Idproof;
        const Signature = req.files.Signature;
   

    let EmployeeRecord = new EmployeeRecordModel({ Firstname, Lastname, Dob, Fathername, Mothername, Phoneno, Email, Qualification, Subject, Salary, Designation, LocalAddress, PermanentAddress, City, State, PinCode, Time ,Photo , Idproof , Signature})
    let result = await EmployeeRecord.save()
    res.json(result)
console.log(result)

})
export default EmployeeRecordRouter