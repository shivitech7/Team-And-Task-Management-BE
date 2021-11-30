import express, { Router } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "./Database/connection.js";
import Routes from "./Routes/project.js";


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.set("view engine", "ejs");

//Initialize port number
const PORT = 5000

//All routes
app.get("/",(req,res)=>{
    res.render('form')
});

app.use("/projects", Routes);
app.use("/uploads", express.static('uploads'));

app.listen(PORT, ()=> console.log(`Server listening at port: ${PORT}`))
