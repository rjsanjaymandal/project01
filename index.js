const express = require("express");
const fs = require("fs");
const { connectMongoDb } = require("./connection");
const userRouter = require("./routes/user");
const { logReqRes } = require("./middlewares");
const { connect } = require("http2");

// connection
connectMongoDb("mongodb://127.0.0.1:27017/projet")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Mongo Error", err));

const app = express();   
const PORT = 8000;

app.use(express.urlencoded({ extended: false }));

app.use(logReqRes("log.txt"));
// routes
app.use("/users", userRouter); 

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
   