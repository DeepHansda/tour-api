const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())
require('./database/connect/mongo_connection');
const tourRouter = require('./router/tour_router')
const port = process.env.PORT || 5000;
app.use(express.json())
app.use(tourRouter);



app.listen(port,()=>{
    console.log('listening on port '+port);
})