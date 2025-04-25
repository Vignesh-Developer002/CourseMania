import mysql from "mysql";

const pool = mysql.createPool({
        host:"localhost",
        user:"root",
        password:"",
        database:"userdetails",
      });

      // process.env.HOST ||process.env. USER ||process.env.PASSWORD ||process.env.DATABASE ||
  
  export default pool;