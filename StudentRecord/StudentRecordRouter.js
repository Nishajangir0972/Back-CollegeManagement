import express from "express";
import StudentRecordModel from "./StudentRecordModel.js";
import multer from "multer";
import path from "path";

const StudentRecordRouter = express.Router();

const storage = multer.diskStorage({
    destination: "uploads/",
    filename: function (req, file, callback) {
        const ext = path.extname(file.originalname);
        const filename = req.body.Firstname + ext;
        callback(null, filename)
    }
})
const uploadPhoto = multer({ storage: storage });


StudentRecordRouter.get("/ShowStudentRecord", async (req, res) => {
    let showData = await StudentRecordModel.find()
    // console.log(showData);
    res.json(showData)
})


StudentRecordRouter.get("/ShowStudentRecord/:id", async (req, res) => {
    let showData;
    // console.log(req.params.id);
    try {
        // console.log(id);
         showData = await StudentRecordModel.findById(req.params.id)
        // console.log(showData);
    } catch (error) {
        console.log("error block ");
    }
    res.json(showData)
})


StudentRecordRouter.post("/StudentRecordadd", uploadPhoto.fields([
    { name: 'Photo', maxCount: 1 },
    { name: 'Idproof', maxCount: 1 },

]),
    async (req, res) => {
        const { Firstname, Lastname, Dob, Fathername, Mothername, Phone, Email, Course, RegistrationDate, LocalAddress, ParentNo, PermanentAddress, City, State, PinCode, Gender } = req.body
        const Photo = req.files.Photo;
        const Idproof = req.files.Idproof;



        let StudentRecord = new StudentRecordModel({ Firstname, Lastname, Dob, Fathername, Mothername, Phone, Email, Course, ParentNo, RegistrationDate, LocalAddress, PermanentAddress, City, State, PinCode, Photo, Idproof, Gender })
        let result = await StudentRecord.save()
        res.json(result)
        // console.log(result)

    })


export default StudentRecordRouter