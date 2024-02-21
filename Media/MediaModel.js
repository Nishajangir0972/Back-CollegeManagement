import mongoose from "mongoose";

const MediaModelSchema = new mongoose.Schema({
    Photo : Object
})

const MediaModel = mongoose.model("Media" , MediaModelSchema)
export default MediaModel