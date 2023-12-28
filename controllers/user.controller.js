const user=require("../models/user.schema")

const Home=(req,res)=>{
    res.send("home")
}

// singup

const signup=async(req,res)=>{
    try{
     let data=await user.findOne({email:req.body.email})
     if(data){
         return res.send("user exits")
     }
     else{
         data=await user.create(req.body)
         return res.send(data)
     }
    }
    catch(error){
     return res.send(error.message)
    }
 }

// login

const login=async(req,res)=>{
    res.send("Home")
}

const usersignup=(req,res)=>{
        res.render("signup")
}

const userlogin=(req,res)=>{
    res.render("login")
}

const google = (req,res)=>{
    res.send('hello')
}

const profile=(req,res)=>{
    if(req.user){
        res.render("profile",{user:req.user})
    }
    else{
       res.send(req.user)
       res.redirect("/signup")
    }
}
const reset = async (req, res) => {
    let { oldpassword, newpassword } = req.body
    if (req.user.password == oldpassword) {
        await user.findByIdAndUpdate(req.user.id, { password: newpassword })
        res.send(await user.findById(req.user.id))
    }
    else {
        res.send("wrong password")
    }
    res.render("reset")
}
module.exports={Home,signup,usersignup,login,userlogin,google,profile,reset}