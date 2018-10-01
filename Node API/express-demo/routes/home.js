const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // res.end("Hello World", () => {
  //   console.log("Sent a request");
  // });
  res.render("index", { title: "My Express App", message: "Hello" });
});
