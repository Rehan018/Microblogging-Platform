const express = require("express");
const followRoutes = require('./routes/followRoutes.js');
const connectUsingMongoose=require('./util/databse.js');

const app = express();
app.use(express.json());
app.use("/api/follow", followRoutes);

const PORT = 3000;
app.listen(PORT,(err)=>{
    if (err) {
        console.log(`Error in running the server: ${err}`);
      }
      console.log(`Server is running on port: ${PORT}`);
      connectUsingMongoose();
})