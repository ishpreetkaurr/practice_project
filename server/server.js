//FRAMEWORK CONFIGURATION:

const express = require("express");
const connectDb = require("./config/dbConnection.js");
const errorHandler = require("./middlewares/errorHandler.js");
const cors = require("cors");

//env file config
const dotenv = require("dotenv");
dotenv.config();

connectDb();
const app = express();
app.set('view engine', 'hbs');
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

//routes below
app.get('/',(req,res)=>{
    res.send("working");
});

app.get('/home',(req,res)=>{
    //let user = User.findOne({id:})
    res.render("home",{
        username:"Carlos",
        posts:"Spain, Italy"
    })
});

app.get('/allUsers',(req,res)=>{
    const data = [{name: "Charles", team: "Ferrari"},
    {name:"Oscar", team:"McLaren"}];
    res.render("home",{data});
});

//Error handling middleware
app.use(errorHandler);

//APP CONFIG START
app.listen(port, () => {
console.log(`Server running on port http://localhost:${port}`);
});