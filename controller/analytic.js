let EVENT = require("../model/event");

exports.ViewAnalytic = async function (req, res, next) {
    try {
        let View = await EVENT.findById(req.params.id);
        res.status(201).json({
            status : 'success',
            message : "Analytic Viewed successfully",
            data: View
        });
    } catch (error) {
        res.status(201).json({
            status : 'Fail',
            message : error.message
        });        
    }
};