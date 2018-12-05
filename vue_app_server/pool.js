const mysql=require('mysql');
const pool=mysql.createPool({
    host:"127.0.0.1",
    post:3306,
    user:"root",
    database:"gz",
    connectionLimit:20
})
module.exports=pool;