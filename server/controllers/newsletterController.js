
const asyncHandler = require("express-async-handler");
const NewsLetter = require("../models/newsletterModel");

const getNewsLetter = asyncHandler(async(req,res)=>{
    try{
        const data = await NewsLetter.find({});
        res.status(200).json(data);
    }catch(err){
        return res.status(404).json({message: err.message});
    };
})

const createNewsLetter = asyncHandler(async (req, res) => {
    try {
        const { email, title, author, date, imageUrl, description } = req.body;

        if (!email || !title || !author || !date || !imageUrl || !description) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Check if the email already exists in the newsletter collection
        const existingSubscriber = await NewsLetter.findOne({ email });
        if (existingSubscriber) {
            return res.status(400).json({ message: "Email is already subscribed." });
        }

        // Create a new subscriber with all the fields
        const newSubscriber = await NewsLetter.create({
            email,
            title,
            author,
            date,
            imageUrl,
            description,
        });

        res.status(201).json({ message: "Subscription successful!", data: newSubscriber });
    } catch (err) {
        return res.status(500).json({ err: err.message });
    }
});

module.exports = { getNewsLetter, createNewsLetter }