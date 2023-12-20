import express from "express";
import StudentModel from '../StudentLogin/StudentModel.js'

const StudentRouter = express.Router();

StudentRouter.post("/register", async (req, res) => {
    let StudentToRegister = new StudentModel(req.body)
    let result = await StudentToRegister.save()
    res.json(result)
})


StudentRouter.post("/login", async (req, res) => {
    if (req.body.Username && req.body.Password) {
        let Studentlogin = await StudentModel.findOne(req.body)
        if (Studentlogin) {
            res.send(Studentlogin)
        }
        else {
            res.send({ result: "no user found" })
        }

    }

    else {
        res.send({ result: "Plz fill both field " })
    }
})

export default StudentRouter