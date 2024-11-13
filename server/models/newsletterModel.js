const { title } = require("framer-motion/client");
const mongoose = require("mongoose");

const newsletterSchema = mongoose.Schema({
    title: {
        type: String, 
        required: [true, "please add your tilte"], // Corrected 'require' to 'required'
    },
    author: {
        type: String, 
        required: [true, "please add name of the author"], // Corrected error message
    },
    date: {
        type: Number, 
        required: [true, "please add date"], // Corrected 'require' to 'required'
    },
    imageUrl: {
        type: String, 
        required: [true, "please add imageUrl"], // Corrected 'require' to 'required'
    },
    description: {
        type: String, 
        required: [true, "please add image description"], // Corrected 'require' to 'required'
    }
    
}, {
    timestamps: true, 
});

module.exports = mongoose.model("newsLetter", newsletterSchema);