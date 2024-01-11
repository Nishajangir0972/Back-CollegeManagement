import express from "express";
import AdminNoticeModel from "./AdminNoticeModel.js";

const AdminNoticeRouter = express.Router()

AdminNoticeRouter.post("/notice", async (req, res) => {
    let AdminNotice = new AdminNoticeModel(req.body)
    let result = await AdminNotice.save()
    res.json(result)
})

AdminNoticeRouter.get("/showNotice", async (req, res) => {
    let result = await AdminNoticeModel.find()
    res.json(result)
})

export default AdminNoticeRouter