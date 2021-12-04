const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

//CONNECT CLOUD MONGODB
//dotenv.config();
// mongoose.connect(
//     process.env.MONGO_URL,
//     { userNewUrlParser: true, userUnifiedTopology:true },
//     ()=>{
//         console.log("connected to MongoDB")
//     }
// )

//CONNECT LOCALHOST MONGODB
mongoose.connect('mongodb://localhost:27017/socialApp',()=>{
    console.log("Connected to MongoDB!")
});

//Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("comman"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute)

// app.get("/",(req,res)=>{
//     res.send("Welcom to homepage")
// })

// app.get("/users",(req,res)=>{
//     res.send("Welcom to user page")
// })

const port = 8801;


app.listen(port,()=>{
    console.log("Backend server is running!")
})