// 1- require express
const express = require("express");
// 2- instance of express
app = express();
// 5- require/config dotenv
require("dotenv").config();
// 6- connect to DB
const connectDB = require("./config/connectDB");
const Contact = require("./model/Contact");
connectDB();
// 8- bodyparser middleware
app.use(express.json());

// 7- require routes
const router = require("./routes/contact");
app.use("/api/contacts/", router);

//3- port
const port = process.env.PORT;

// 4- create server
app.listen(port, (error) =>
  error
    ? console.log("Can not run server !!!")
    : console.log(`Server is running on port ${port} ...`)
);
