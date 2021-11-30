import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    id:Number,
    name:String,
    email:String,
    dob:String,
    about:String,
    phone_number:Number,
    img:String,
    department:String,
    projects:Array
})

const createUser = mongoose.Model("Users", userSchema);

export default createUser;