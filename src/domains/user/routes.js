const express=require("express")
const router= express.Router();

//signup
router.post("/signup",async(req,res)=>{
    try{
        let { name,email,password }=req.body;
        name= name.trim()
        email= email.trim()
        password= password.trim();
        if(!(name&&email&&password)){
            throw Error("empty input fields!")
        }else if(!/^[a-zA-Z]*$/.test(name)){
            throw Error("Invalid name entered")  
        }else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2.4}$/.test(email)){
            throw Error("Invalid email entered")  
        }else if(password.length<8){
            throw Error("password is too short")
        }
    }
    catch(error){

    }
});