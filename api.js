const express = require("express");
const router = express.Router();

router.get("/ticket:id", (req, res)=>{
  res.send({method: "GET"});
});

router.post("/ticket", (req, res)=>{
  res.send({method: "POST"});
});

router.put("/ticket/:id", (req, res)=>{
  res.send({method: "PUT"});
});

router.delete("/ticket/:id", (req, res)=>{
  res.send({method: "DELETE"});
});

module.exports = router;