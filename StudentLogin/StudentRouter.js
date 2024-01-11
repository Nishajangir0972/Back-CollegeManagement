import express from "express";
import StudentModel from '../StudentLogin/StudentModel.js'

const StudentRouter = express.Router();

StudentRouter.post("/register", async (req, res) => {
    const emailCheck = req.body.Email
    let studentEmail = await StudentModel.findOne({Email :emailCheck})
    if( studentEmail){
        console.log("Already used");
    }
        let StudentToRegister = new StudentModel(req.body)
        let result = await StudentToRegister.save()
        res.json(result)
})


StudentRouter.post("/login", async (req, res) => {
    if (req.body.Username && req.body.Password) {
        let Studentlogin = await StudentModel.findOne({ Username: req.body.Username, Password: req.body.Password})
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

StudentRouter.get("/login/:id" , async(req,res)=>{
    let getData;
    try{
        getData = await StudentModel.findById(req.params.id)
       // console.log(getData)
    }
    catch(error){
        // console.log("errorrrrr")
    }
    res.json(getData)
})

export default StudentRouter