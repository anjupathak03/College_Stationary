import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
//import dotenv from "dotenv";
import cors from "cors";
// import path from "path";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";


const app = express();
dotenv.config();

app.use(cors());
app.use(express.json()); //middleware

//deployment
// if(process.env.Node_ENV ==="production"){
//   const dirPath = path.resolve();
//   app.use(express.static("Frontend/dist"));
//   app.get("*",(req,res) =>{
// res.sendFile(path.resolve(dirPath,"Frontend","dist", "index.html"));
// })
// }


const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODB_URI;

//connect to mongoDB
try{
    mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
  });
  console.log("connected to mongoDB");

}
catch(error)
{
  console.log("error",error);

}
//defining route

app.use("/book",bookRoute)
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
  
})