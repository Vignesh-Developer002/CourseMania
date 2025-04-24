import mysql from "mysql";

const pool = mysql.createPool({
        host: process.env.HOST || "localhost",
        user: process.env. USER || "root",
        password:process.env.PASSWORD ||  "",
        database: process.env.DATABASE || "userdetails",
      });

  




  export default pool;