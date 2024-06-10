let USER = require('../model/user');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

exports.sequre = async function (req, res, next) {
    try {
        let token = req.headers.authorization
        if (!token) {
            throw new Error("Please Attech Token");        
        }  
        var decoded = jwt.verify(token,'DEMO')
        let Check = await USER.findById(decoded.id);
        if (!Check) {
            throw new Error("user not found");            
        } 
        next()
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message : error.message            
        })         
    }
};

exports.RegisterOrganizer = async function (req, res, next) {
    try {
        req.body.password = await bcrypt.hash(req.body.password,10);
        let Create = await USER.create(req.body)
        res.status(201).json({
            status: "success",
            message : "Organizer Registered successfully",
            data : Create
        })       
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message : error.message            
        })         
    }
};

exports.OrganizerLogin = async function (req, res, next) {
    try {
        let Check = await USER.findOne({username : req.body.username})
        if (!Check) {
            throw new Error("User not found");            
        }
        let passverify = await bcrypt.compare(req.body.password, Check.password)
        if (!passverify) {
            throw new Error("Password invalid");             
        }       

        res.status(200).json({
            status: "success",
            message : "Organizer Login successfully",
            data : Check            
        })       
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message : error.message            
        })         
    }
};

exports.RegisterParticipant = async function (req, res, next) {
    try {
        req.body.password = await bcrypt.hash(req.body.password,10);
        let Create = await USER.create(req.body)
        res.status(201).json({
            status: "success",
            message : "Participant Registered successfully",
            data : Create
        })       
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message : error.message            
        })         
    }
};

exports.ParticipantLogin = async function (req, res, next) {
    try {
        let Check = await USER.findOne({username : req.body.username})
        if (!Check) {
            throw new Error("User not found");            
        }
        let passverify = await bcrypt.compare(req.body.password, Check.password)
        if (!passverify) {
            throw new Error("Password invalid");             
        }

        var token = jwt.sign({ id: Check._id }, 'DEMO');

        res.status(200).json({
            status: "success",
            message : "Participant Login successfully",
            data : Check,
            token
        })       
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message : error.message            
        })         
    }
};

exports.UpdateUserProfile = async function (req, res, next) {
    try {
        let Update = await USER.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json({
            status: "success",
            message : "Participant Updated successfully",
            data : Update
        })       
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message : error.message            
        })         
    }
};