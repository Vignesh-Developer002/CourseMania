import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();
const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

export default pool;

// process.env.HOST ||process.env. USER ||process.env.PASSWORD ||process.env.DATABASE ||
// "localhost","root","","userdetails",
