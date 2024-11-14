
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
        type: Date, 
        required: [true, "please add date"], // Corrected 'require' to 'required'
    },
    imageUrl: {
        type: String, 
        required: [true, "please add imageUrl"],
    },
    description: {
        type: String, 
        required: [true, "please add image description"], 
    }
    
}, {
    timestamps: true, 
});

module.exports = mongoose.model("NewsLetter", newsletterSchema);