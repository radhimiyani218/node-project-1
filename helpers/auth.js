var GoogleStrategy = require('passport-google-oauth20').Strategy;


const googleAuth=(passport)=>{
    try {
        passport.use(new GoogleStrategy({
            clientID:"919426656787-77eul21vhig7b1js746k7k7p6p74103l.apps.googleusercontent.com",
            clientSecret: "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",
            callbackURL: "http://localhost:2300/auth/google"
        },
        (accessToken, refreshToken, profile, cb) => {
            console.log(profile);
            return cb(null, profile)
        }
        ))
        passport.serializeUser((user,done)=>{
            return done(null,user)
        })
        passport.deserializeUser((user, done) => {
            return done(null, user);
        });
    } catch (error) {
        console.log(error.message);
    }
}


module.exports=googleAuth