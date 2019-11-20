const express = require("express");
const bodyParser = require("body-parser");
const AWSS3 = require("./aws_s3");
const app = express();
const port = 3000;

//Update this information with yours;
AWSCredentials = {
  bucket: "<<bucket name>>",
  accessKey: "<<aws access key>>",
  secret: "<<aws secret>>",
  region: "<<aws region name>>"
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

app.post("/getpolicy", (req, res) => {
  let s3 = new AWSS3(AWSCredentials);
  res.json(s3.getPolicy(req.body));
});

app.post("/savelocation", (req, res) => {
  console.log(req.body.location);
  res.send(`AWS S3 location: <a href="${req.body.location}">${req.body.location}</a>`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
