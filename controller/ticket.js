let TCKT = require("../model/ticket")

exports.CreateTicket = async function (req, res, next) {
    try {
        req.body.userID = req.userID
        let Create = await TCKT.create(req.body);
        res.status(201).json({
            status: "success",
            message : "Ticket created successfully",
            data : Create
        });        
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message : error.message,            
        });        
    }    
};

exports.ViewTicket = async function (req, res, next) {
    try {
        let Find = await TCKT.find({userID : req.userID}).populate("userID");
        res.status(201).json({
            status: "success",
            message : "Ticket Viewed successfully",
            data : Find
        });        
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message : error.message,            
        });        
    }    
};

exports.UpdateTicket = async function (req, res, next) {
    try {
        let Edit = await TCKT.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(201).json({
            status: "success",
            message : "Ticket Updated successfully",
            data : Edit
        });        
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message : error.message,            
        });        
    }    
};

exports.DeleteTicket = async function (req, res, next) {
    try {
        await TCKT.findByIdAndDelete(req.params.id);
        res.status(201).json({
            status: "success",
            message : "Ticket Deleted successfully"            
        });        
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message : error.message,            
        });        
    }    
};