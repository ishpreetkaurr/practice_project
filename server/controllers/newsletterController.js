//get newslwtter, post newsletter...

const asyncHandler = require("express-async-handler");
const NewsLetter = require("../models/newsletterModel");

const getNewsLetter = asyncHandler(async(req,res)=>{
    try{
        const data = await NewsLetter.find({});
        // res.send()
    }catch(err){
        return res.status(404).json({message: err.message});
    };
})

const createNewsLetter = asyncHandler(async(req,res)=>{
    
})

module.exports = {getNewsLetter, createNewsLetter}