const express = require("express");
const awsS3 = require("./aws_s3");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/getpolicy", (req, res) => res.send("Hello World!"));
app.post("/savelocation", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
