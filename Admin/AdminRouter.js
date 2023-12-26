import express from "express";
import AdminModel from "./AdminModel.js";

const AdminRouter = express.Router()

AdminRouter.post("/Register", async (req, res) => {

    let Admintoregister = new AdminModel(req.body)
    let result = await Admintoregister.save()

    res.json(result)

})

AdminRouter.post("/AdminsLogin", async (req, res) => {
    if (req.body.UserName && req.body.Password) {
        let Adminlogin = await AdminModel.findOne({ UserName: req.body.UserName, Password: req.body.Password})
        // console.log(Adminlogin)

        if (Adminlogin) {
            res.send(Adminlogin)
        }
        else {
            res.send({ result: "no user found" })
        }

    }

    else {
        res.send({ result: "Plz fill both field " })
    }
})

export default AdminRouter