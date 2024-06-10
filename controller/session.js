let SESSION = require("../model/session");

exports.AddSession = async function (req,res,next) {
    try {  
        req.body.userID = req.userID     
        let Add = await SESSION.create(req.body);
        res.status(201).json({
            status : "success",
            message : "Session Added Successfully",
            data : Add
        });
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message           
        });        
    }
};

exports.ViewSession = async function (req,res,next) {
    try {       
        let Find = await SESSION.find({userID : req.userID}).populate("userID");
        res.status(201).json({
            status : "success",
            message : "Session Viewed Successfully",
            data : Find
        });
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message           
        });        
    }
};

exports.UpdateSession = async function (req,res,next) {
    try {       
        let Update = await SESSION.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(201).json({
            status : "success",
            message : "Session Updated Successfully",
            data : Update
        });
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message           
        });        
    }
};

exports.DeleteSession = async function (req,res,next) {
    try {       
        await SESSION.findByIdAndDelete(req.params.id);
        res.status(201).json({
            status : "success",
            message : "Session Deleted Successfully"            
        });
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message           
        });        
    }
};