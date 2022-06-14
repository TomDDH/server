//jshint esversion:6

const express = require("express");
const app = express();
const port = 3030;
const cors = require('cors')
const mysql = require("mysql");

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"password",
    database:"webxr_data"
})




app.use(cors())
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/data",(req,res)=>{
    const sqlSelect = "SELECT * FROM product_data"



    db.query(sqlSelect,(err,result)=>{
        // res.send("Hello World!" );
        console.log(result)
        if (err) throw err
        res.json(result)
        // console.log(result)

    })


})

app.get("/", (req, res) => {
  res.send("Hello World!" +res );
  res.json({ message: "ok" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
