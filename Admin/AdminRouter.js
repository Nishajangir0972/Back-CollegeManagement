import  express  from "express";
import AdminModel from "./AdminModel.js";

const AdminRouter = express.Router()

AdminRouter.post("/Register" ,async (req,res)=>{

let Admintoregister = new AdminModel(req.body)
let result = await Admintoregister.save()

res.json(result)

})

 AdminRouter.post("/AdminLogin" ,async(req , res)=>{
if(req.body.Username && req.body.Password){
    let AdminToLogin = await AdminModel.findOne(req.body)
    if(AdminToLogin){
        res.send(AdminToLogin)
    }
    else{
        res.send({result: "no user found"})
    }
}
else{
    res.send({result :"plz fill both field"})
}
 })

export default AdminRouter