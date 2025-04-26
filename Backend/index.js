import express from "express";
import dotenv from "dotenv";
// import course from "./data/Coursedata.json" with {type:"json"} ;
import cors from "cors";
import pool from "./config/db_connection.js";
// import certifictionCourse from "../Backend/data/Certification.json" with {type:"json"};
import multer from "multer";
import path from "path";

const app = express();
dotenv.config();
// to access the image
app.use("/image", express.static("upload/images"));

//storage
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: storage,
});

//PORT CONFIGURATION
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());

// app.use((req,res,next)=>{
//    console.log("request url =", req.url);
//    console.log("request method =",  req.method);
//    console.log("request body =", req.body);
//    console.log("request PARARMAS =", req.params);
//    next()
// });

// server running message
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

// courses API

//  app.get("/courses", (req,res)=>{
//     return res.status(200).json(course)
//  });

app.get("/courses", (req, res) => {
  pool.query(`select * from course`, (err, result) => {
    if (err) {
      return res.status(500).send({ success: false, message: "no data found" });
    } else {
      return res.status(200).send(result);
    }
  });
});

//  certificationCourse API

//  app.get("/Certification", (req,res)=>{
//         return res.status(200).json(certifictionCourse)
//  })

app.get("/Certification", (req, res) => {
  pool.query(`select * from certificate`, (err, result) => {
    if (err) {
      return res.status(500).send({ success: true, message: "No data found" });
    } else {
      return res.status(200).send(result);
    }
  });
});

//inerting data to the user table
app.post("/users", (req, res) => {
  const { name, email, password } = req.body;

  pool.query(
    "INSERT INTO user (name,Email,password) VALUES (?, ?, ?)",
    [name, email, password],
    (error, results) => {
      if (error) {
        console.error(error);
        res
          .status(500)
          .send({ success: false, message: "Error creating user" });
        console.log(results);
      } else {
        res.status(200).send("User created successfully");
      }
    }
  );
});

//getting perticular user data by login form data match with data stored in db
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  pool.query(
    "SELECT Email, password from user Where Email =? and password =?",
    [email, password],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send({ success: false, message: "Email mismatch" });
      } else {
        console.log("results", results);
        res.status(200).json({ results });
      }
    }
  );
});

//getting the user data for display in nav bar
app.post("/userdata", (req, res) => {
  const { email, password } = req.body;
  pool.query(
    "SELECT Name from user Where Email =? and password =?",
    [email, password],
    (error, results) => {
      if (error) {
        console.error(error);
        res
          .status(500)
          .send({ success: false, message: "Error creating user" });
      } else {
        console.log("results", results);
        res.status(200).json({ results });
      }
    }
  );
});

//getting and validating the admin name and password
app.post("/admins", (req, res) => {
  const { name, password } = req.body;
  pool.query(
    "SELECT Name,password from admin where Name= ? and password = ?",
    [name, password],
    (error, results) => {
      if (error) {
        console.error(error.code);
        res
          .status(500)
          .send({ success: false, message: "Error accours user not found" });
      } else {
        console.log("result", results);
        res.status(200).json({ results });
      }
    }
  );
});

//getting the admin user name for diplay in the nav bar

app.get("/adminName", (req, res) => {
  pool.query(`select name from admin`, (err, result) => {
    if (err) {
      return res
        .status(500)
        .send({ success: false, message: "User not found" });
    } else {
      return res.status(200).send({ success: true, result });
    }
  });
});

// contact section details api for insert the contact detail in db

app.post("/contactdetail", upload.single("image"), (req, res) => {
  const { filename } = req.file;
  const {
    name,
    description,
    companyName,
    address,
    phone,
    instaUrl,
    linkedInUrl,
  } = req.body;
  console.log(
    name,
    description,
    companyName,
    address,
    phone,
    instaUrl,
    linkedInUrl
  );
  pool.query(
    `INSERT into contactdetails (name, description,imageurl,companyName , address, phone, instaUrl,linkedInUrl) VALUES (?, ?, ?, ?, ?, ?, ?, ?) `,
    [
      name,
      description,
      `http://192.168.1.82:4000/image/${filename}`,
      companyName,
      address,
      phone,
      instaUrl,
      linkedInUrl,
    ],
    (err, result) => {
      if (err) {
        return res
          .status(500)
          .send({ success: false, message: "data not inserted" });
      } else {
        return res
          .status(200)
          .send({
            success: true,
            message: "Data inserted successfully",
            img_url: `http://192.168.1.82:4000/image/${req.file.filename}`,
          });
      }
    }
  );
});

//getting all contact data from the database --------------------------
app.get("/contactdetail", (req, res) => {
  pool.query(
    `select id,name,imageurl,description,companyName,address,phone, substring(stored_date,1,11) as stored_date,instaUrl ,linkedInUrl  from contactdetails`,
    (err, result) => {
      if (err) {
        return res
          .status(500)
          .send({ success: false, message: "no data found" });
      } else {
        return res.status(200).send({ success: true, result });
      }
    }
  );
});

// deleting the perticular contactdetails  data -------------------
app.post("/deleteContact/:id", (req, res) => {
  const { id } = req.params;
  pool.query("delete from contactdetails where id =? ", [id], (err, result) => {
    if (err) {
      return res.status(500).send({ success: false, message: "error occours" });
    } else {
      return res
        .status(200)
        .send({ success: true, message: "Data removed successfully" });
    }
  });
});

//getting the particular contact details data based on id for edit ------------

app.post("/contactdetail/:id", (req, res) => {
  const { id } = req.params;
  pool.query(
    `select * from contactdetails where id = ?`,
    [id],
    (err, result) => {
      if (err) {
        return res
          .status(500)
          .send({ sucess: false, message: "Data not found" });
      } else {
        return res.status(200).send({ sucess: true, result });
      }
    }
  );
});

//update the edited data

app.post("/contactdetailUpdate/:id", upload.single("image"), (req, res) => {
  const { id } = req.params;
  const {
    name,
    description,
    companyName,
    address,
    phone,
    instaUrl,
    linkedInUrl,
  } = req.body;
  console.log(
    name,
    description,
    companyName,
    address,
    phone,
    instaUrl,
    linkedInUrl
  );
  pool.query(
    `update contactdetails set name=?, description=?, companyName = ?, address=?, phone=?, instaUrl=?, linkedInUrl=? where id =? `,
    [name, description, companyName, address, phone, instaUrl, linkedInUrl, id],
    (err, result) => {
      if (err) {
        return res
          .status(500)
          .send({ success: false, message: "error occurs" });
      } else {
        return res
          .status(200)
          .send({ success: true, message: "data updated successfully" });
      }
    }
  );
});

//for delete the image

app.post("/imageDelete", (req, res) => {
  const { i } = req.body;
  console.log(i);
  pool.query(
    `delete from contactdetails where imageurl = ?`,
    [i],
    (err, result) => {
      if (err) {
        return res
          .status(500)
          .send({ success: false, message: "image not available" });
      } else {
        return res.status(200).send({ success: true, result });
      }
    }
  );
});
