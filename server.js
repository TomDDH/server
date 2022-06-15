//jshint esversion:6

const express = require("express");
const app = express();
const port = 5000;
const cors = require('cors')


const mysql = require("mysql");

// const db = mysql.createPool({
//     host:"free-db.ccj1y6o1kv7w.us-east-2.rds.amazonaws.com",
//     user:"admin",
//     password:"hudadong123",
//     database:"webxr_data"
// })

const db = mysql.createPool({
  host:"localhost",
  user:"root",
  password:"Dadonghu123!",
  database:"webxr_data"
})


app.use(cors())
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/",(req,res)=>{

    const sqlSelect = "SELECT * FROM product_data"
    db.query(sqlSelect,(err,result)=>{
        console.log(result)
        if (err) throw err
        res.json(result)
    })

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
