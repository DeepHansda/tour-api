const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();
const mongo_uri =process.env.MONGODB_UR || "mongodb://localhost:27017/tours";
const connections_params={
    useNewUrlParser:true,
    useUnifiedTopology:true
};

mongoose.connect(mongo_uri,connections_params).then(()=>{
    if(mongoose.connect){
        console.log("MongoDB Connected");
    }
}).catch((err)=>{
    console.log(err);
})