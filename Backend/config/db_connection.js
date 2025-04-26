import mysql from "mysql";

const pool = mysql.createPool({
        host: process.env.HOST ,
        user:process.env.USER,
        password:process.env.PASSWORD,
        database:process.env.DATABASE,
      });

      // process.env.HOST ||process.env. USER ||process.env.PASSWORD ||process.env.DATABASE ||
  // "localhost","root","","userdetails",
  export default pool;