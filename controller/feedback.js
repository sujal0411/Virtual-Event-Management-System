let FEEDBACK = require("../model/feedback");

exports.AddFeedback = async function (req, res, next) {
    try {
        req.body.userID = req.userID;
        let Add = await FEEDBACK.create(req.body);
        res.status(201).json({
            status: "success",
            message : "Thanks for Feedback!",
            data : Add
        });
    } catch (error) {
        res.status(201).json({
            status: "fail",
            message : error.message           
        });        
    }
};

exports.ViewFeedback = async function (req, res, next) {
    try {
        let Find = await FEEDBACK.find({userID : req.userID}).populate("userID");
        res.status(201).json({
            status: "success",
            message : "Feedback Viewed successfully",
            data : Find
        });
    } catch (error) {
        res.status(201).json({
            status: "fail",
            message : error.message           
        });        
    }
};