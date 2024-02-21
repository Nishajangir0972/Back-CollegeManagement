import express from "express";
import StudentModel from '../StudentLogin/StudentModel.js'

const StudentRouter = express.Router();

StudentRouter.post("/register", async (req, res) => {
    try {
        const emailCheck = req.body.Email;
        const usernameCheck = req.body.Username;

        let studentEmail = await StudentModel.findOne({ Email: emailCheck });
        if (studentEmail) {
            // console.log("Email already used");
            throw new Error("Email already used");
        }

        let studentUsername = await StudentModel.findOne({ Username: usernameCheck });
        if (studentUsername) {
            // console.log("Username already used");
            throw new Error("Username already used");
        }

        let studentToRegister = new StudentModel(req.body);
        let result = await studentToRegister.save();
        res.json(result);
    } catch (error) {
        res.json({ message: error.message });
    }
})


StudentRouter.post("/login", async (req, res) => {
    if (req.body.Username && req.body.Password) {
        let Studentlogin = await StudentModel.findOne({ Username: req.body.Username, Password: req.body.Password })
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

StudentRouter.get("/login/:id", async (req, res) => {
    let getData;
    try {
        getData = await StudentModel.findById(req.params.id)
        // console.log(getData)
    }
    catch (error) {
        // console.log("errorrrrr")
    }
    res.json(getData)
})

export default StudentRouter