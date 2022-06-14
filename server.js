//jshint esversion:6

const express = require("express");
const app = express();
const port = 5000;
const cors = require('cors')


app.use(cors())
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/",(req,res)=>{
    res.send("<h1>Hello World!? Ubuntu</h1>" );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
