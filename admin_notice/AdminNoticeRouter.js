import express from "express";
import AdminNoticeModel from "./AdminNoticeModel.js";
import multer from "multer";
import path from "path";

const AdminNoticeRouter = express.Router()

const storage = multer.diskStorage({
    destination:"uploads/",
    filename: function(req,file,callback){
        const ext = path.extname(file.originalname)
        const filename = req.body.Subject + ext;
        callback(null , filename)
    }
})

const uploadPhoto = multer({storage:storage})

AdminNoticeRouter.post("/notice",uploadPhoto.single("Photo"),   async  (req, res) => {
    const {Content,Subject,noticeDate} = req.body;
    const Photo = req.file;
    const AdminNotice = new AdminNoticeModel({Content, Subject, Photo, noticeDate })
    let result = await AdminNotice.save()
    res.json(result)
})

AdminNoticeRouter.get("/showNotice", async (req, res) => {
    let result = await AdminNoticeModel.find()
    res.json(result)
})

export default AdminNoticeRouter