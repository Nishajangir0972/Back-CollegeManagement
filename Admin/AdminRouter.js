import express from "express";
import AdminModel from "./AdminModel.js";
import bcrypt from "bcrypt"

const AdminRouter = express.Router()

AdminRouter.post("/Register", async (req, res) => { 

    try {
        const emailCheck = req.body.Email;
        const usernameCheck = req.body.UserName;

        let AdminEmail = await AdminModel.findOne({ Email: emailCheck });
        if (AdminEmail) {
            // console.log("Email already used");
            throw new Error("Email already used");
        }

        let AdminUsername = await AdminModel.findOne({ UserName: usernameCheck });
        if (AdminUsername) {
            // console.log("Username already used");
            throw new Error("Username already used");
        }

        let Admintoregister = new AdminModel(req.body)
    let result = await Admintoregister.save()

    res.json(result)
    } catch (error) {
        res.json({ message: error.message });
    }



    
   

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

AdminRouter.get("/AdminsLogin/:id" , async(req,res)=>{
    let getData;
    try{
        // console.log(req.params.id)
        getData = await AdminModel.findById(req.params.id)
        // console.log(getData)
    }
    catch(error){
        // console.log("error")
    }
    res.json(getData)
})



export default AdminRouter