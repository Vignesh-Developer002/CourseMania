import express from "express"
import dotenv from "dotenv"
import course from "./data/Coursedata.json" with {type:"json"} ;
import cors from "cors";
 import certifictionCourse from "../Backend/data/Certification.json" with {type:"json"};
const app =express();

dotenv.config()

//PORT CONFIGURATION
const PORT = process.env.PORT ||4000;

app.use(cors());

// server running message
 app.listen( PORT,()=>{console.log(`server is running on port ${PORT}`)});

 //routes
 // courses API
 app.get("/courses", (req,res)=>{  
    return res.status(200).json(course)
 });

//  certificationCourse API
 app.get("/Certification", (req,res)=>{ 
        return res.status(200).json(certifictionCourse)
 })
