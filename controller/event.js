let EVENT = require("../model/event");

exports.CreateEvent = async function (req,res,next) {
    try {  
        req.body.usedID = req.userID     
        let Create = await EVENT.create(req.body);
        res.status(201).json({
            status : "success",
            message : "Event Created Successfully",
            data : Create
        });
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message           
        });        
    }
};

exports.ViewEvent = async function (req,res,next) {
    try {       
        let Find = await EVENT.find({userID : req.userID}).populate("userID");
        res.status(201).json({
            status : "success",
            message : "Event Viewed Successfully",
            data : Find
        });
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message           
        });        
    }
};

exports.UpdateEvent = async function (req,res,next) {
    try {       
        let Update = await EVENT.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(201).json({
            status : "success",
            message : "Event Updated Successfully",
            data : Update
        });
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message           
        });        
    }
};

exports.DeleteEvent = async function (req,res,next) {
    try {       
        await EVENT.findByIdAndDelete(req.params.id);
        res.status(201).json({
            status : "success",
            message : "Event Deleted Successfully"            
        });
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message           
        });        
    }
};