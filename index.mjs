import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/routes.mjs';
import dotenv from "dotenv";


//for dotenv
dotenv.config();

//to check 👇
// console.log(process.env)


const PORT = process.env.PORT;
const app = express();


// mongoose connection
mongoose.Promise = global.Promise
mongoose.connect(process.env.ATLAS_URI,{
    useNewUrlParser: true
});

//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//run server 

routes(app);


app.listen(PORT, ()=>{
    console.log(`server is running at Port http://localhost:${PORT}`)
})

app.get('/',(req,res)=> {
    res.send("everything working alright mate 🥂")
})