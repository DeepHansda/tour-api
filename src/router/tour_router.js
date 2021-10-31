const express = require("express");
const TourModel = require("../database/models/tour_model");

const tourRouter = new express.Router();

tourRouter.post('/post',async(req, res)=>{
    try {
    const tourModel = new TourModel(req.body);
    const savedTour = await tourModel.save();
    console.log(savedTour);
    res.status(200).send(savedTour);
}

catch (err) {
    res.status(400).send(err)
}
    
});

tourRouter.get('/get',async(req, res)=>{
    try {
    const findData = await TourModel.find();
    res.status(200).send(findData);
    }

    catch(err){
        res.status(400).send(err)
    }
    
})

tourRouter.put('/put/:id',async(req, res)=>{
    try{
     const id = req.params.id;
    const put = req.body;
    const putData = await TourModel.findByIdAndUpdate(id, put,{
        new:true,
    });

    res.status(200).send(putData);

    }

    catch(err){
        res.status(400).send(err)
    }

})
   

tourRouter.patch('/patch/:id',async(req, res)=>{
    try{
    const id = req.params.id;
    const patch = req.body;
    const patchData = await TourModel.findByIdAndUpdate(id, patch,{
        new:true,
    })    
    }

    catch(err){
        res.status(400).send(err)
    }
    
})

module.exports = tourRouter;