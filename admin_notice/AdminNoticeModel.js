import mongoose from "mongoose";

const AdminNoticeSchema = new mongoose.Schema({
   Subject:String,
   Content:String,
   noticeDate:String,
   Photo: Object
})

const AdminNoticeModel = mongoose.model("Notice",AdminNoticeSchema)

export default AdminNoticeModel