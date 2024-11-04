//FRAMEWORK CONFIGURATION:

const express = require("express");
const connectDb = require("./config/dbConnection.js");
const errorHandler = require("./middlewares/errorHandler.js");
const cors = require("cors");
const hbs = require("hbs");
const path = require("path");

const users = [
    { name: "ish", age: 20 },
    { name: "tanu", age: 21 },
    { name: "mehr", age: 1 },
];

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

app.set('view engine' , 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));
app.get('/home',(req,res)=>{
    //let user = User.findOne({id:})
    res.render("home",{
        username:"Carlos",
        posts:"Spain, Italy"
    })
});

app.get('/allUsers',(req,res)=>{
        res.render("alluser", {
        users: users, 
        });
});

// Register route
app.use("/api/register", require("./routes/userRoutes"));


//Error handling middleware
app.use(errorHandler);

//APP CONFIG START
app.listen(port, () => {
console.log(`Server running on port http://localhost:${port}`);
});