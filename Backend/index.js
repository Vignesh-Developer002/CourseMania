import express from "express"
import dotenv from "dotenv"
import course from "./data/Coursedata.json" with {type:"json"} ;
import cors from "cors";
import pool from "./config/db_connection.js";
import certifictionCourse from "../Backend/data/Certification.json" with {type:"json"};


const app =express();

dotenv.config()


//PORT CONFIGURATION
const PORT = process.env.PORT ||4000;

app.use(cors());
app.use(express.json());

app.use((req,res,next)=>{
   console.log("request url =", req.url);
   console.log("request method =",  req.method);
   console.log("request url =", req.body);
   console.log("request PARARMAS =", req.params);
   next()
});

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

 //inerting data to the user table
 app.post('/users', (req, res) => {
   const { name, email,password } = req.body;

   pool.query('INSERT INTO user (name,Email,password) VALUES (?, ?, ?)', [name, email, password], (error, results) => {
       if (error) {
           console.error(error);
           res.status(500).send('Error creating user');
           console.log(results)
       } else {
           res.status(200).send('User is created successfully');
           
       }
   });
});

 //getting perticular user data by login form data match with data stored in db 
 app.post('/login', (req, res) => {
   const {email,password } = req.body;
   pool.query('SELECT Email, password from user Where Email =? and password =?',[email,password] , (error, results) => {
       if (error) {
           console.error(error);
           res.status(500).send('Error creating user');
       } else {
         console.log('results', results)
        res.status(200).json({results});
       }
   });
});

//getting the user data for display in nav bar
  app.post('/userdata',(req,res)=>{
    const {email, password } = req.body;
    pool.query('SELECT Name from user Where Email =? and password =?',[email,password] , (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error creating user');
        } else {
          console.log('results', results)
         res.status(200).json({results});
        }
    });
  })


  //getting and validating the admin name and password 
  app.post('/admins', (req,res)=>{
    console.log(req.body)
        const {name,password}=req.body
        pool.query('SELECT Name, password from admin where Name= ? and password = ?', [name, password], (error, results)=>{
           if(error){
            console.error(error.code);
            res.status(500).send('Error accours user not found');
           }else{
            console.log('result',results)
            res.status(200).json({results})
           }
        })
  })
