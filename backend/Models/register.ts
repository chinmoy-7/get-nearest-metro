import mongoose from "mongoose";


const SignupSchema=new mongoose.Schema({
    email:{type:String},
    password:{type:String}
})

const signup = mongoose.model("signup",SignupSchema);

export default signup