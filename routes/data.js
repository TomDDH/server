//jshint esversion:6

const { Router } = require("express");
const express = require("express");
const app = express();
const port = 3000;




const router = Router()


router.get("/", (req, res) => {
  res.send("Hello World! Data" );
  res.json({ message: "ok" });
});

router.listen(port, () => {
  console.log(`Example app listening on port ${port}/router`);
});
