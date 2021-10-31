const express = require('express');
const app = express();
require('./database/connect/mongo_connection');
const tourRouter = require('./router/tour_router')
const port = process.env.PORT || 3000;
app.use(express.json())
app.use(tourRouter);


app.listen(port,()=>{
    console.log('listening on port '+port);
})