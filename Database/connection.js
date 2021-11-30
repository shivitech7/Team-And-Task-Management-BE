import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/team-management-api")
.then(()=> {
    console.log("Database is connected.");
})
.catch(()=> {
    console.log("Database connectio failed!");
})