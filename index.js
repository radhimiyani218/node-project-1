const express=require("express")
const router=require("./router/user.router")
const connection=require("./config/db")
// const cookie=require("cookie-parser")
const session=require("express-session")
const passport=require("passport")
const {localAuth}=require("./helpers/local")
const googleAuth = require("./helpers/auth")

const app=express()
app.use(express.json())
// app.use(cookie())
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")
app.set("views",__dirname+"/views")
app.use(express.static(__dirname+"/public"))

app.use(session({secret:"private-key"}))
app.use(passport.initialize())
app.use(passport.session())
localAuth(passport)
googleAuth(passport)

app.use(router)

app.listen(2300,()=>{
    console.log("listening to 2300")
    connection()
})
