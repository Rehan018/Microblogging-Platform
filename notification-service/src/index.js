const express = require('express');
const notificationRoutes = require('./routes/notificationRoutes');
const connectUsingMongoose=require('./util/database.js');

const app = express();
app.use(bodyParser.json());
app.use('/notifications', notificationRoutes);

const PORT = 3000;
app.listen(PORT,(err)=>{
    if (err) {
        console.log(`Error in running the server: ${err}`);
      }
      console.log(`Server is running on port: ${PORT}`);
      connectUsingMongoose();
})