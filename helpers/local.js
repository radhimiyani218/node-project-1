const user = require('../models/user.schema');

const localstrategy=require('passport-local').Strategy

const localAuth=(passport)=>{
    passport.use(new localstrategy(async(username, password,done)=>{
        try{
        let data =await user.findOne({username:username})
        if(!data){
            return done(null,false)
        }
        if(data.password != password){
        return done(null,false)
        }
        return done(null,data)
        }
        catch(error){
            return done(null,error.message)
        }
    }));
    passport.serializeUser((user,done)=>{
        return done(null,user.id)
    })
    passport.deserializeUser(async(id,done)=>{
        const data=await user.findById(id)
        return done(null,data)
    })
}
module.exports={localAuth}