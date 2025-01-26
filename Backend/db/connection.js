const URL = "mongodb+srv://anjupathak9810:Anjuanju85@cluster0.eu8vx.mongodb.net/CollegeStationary?retryWrites=true&w=majority&appName=Cluster0"
import mongoose from mongoose;
const promise =  mongoose.connect(URL);
promise.then(data=>{
    console.log('DB Connected...');
}).catch
