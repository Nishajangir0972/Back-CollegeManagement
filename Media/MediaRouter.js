import express  from "express";
import MediaModel from "./MediaModel.js";
import multer from "multer";
import path from "path";

const MediaRouter  = express.Router()

const storage = multer.diskStorage({
    destination: "uploads/",
    filename: function(req, file, callback) {
        callback(null, file.originalname);
    }
});

const uploadPhoto = multer({ storage: storage });


MediaRouter.post("/addPhoto" , uploadPhoto.single("Photo"),async(req,res)=>{
    const Photo = req.file;
    const MediaAddPhoto = new MediaModel({Photo})
    const result = await MediaAddPhoto.save()
    res.json(result)
})

MediaRouter.get("/showMediaPhoto" , async(req,res)=>{
    let result = await MediaModel.find()
    res.json(result)
})

export default MediaRouter