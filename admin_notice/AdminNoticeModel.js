import mongoose from "mongoose";

const AdminNoticeSchema = new mongoose.Schema({
   Content:String
})

const AdminNoticeModel = mongoose.model("Notice",AdminNoticeSchema)

export default AdminNoticeModel