const mongoose=require("mongoose");
require("dotenv").config();


// Access the MongoDB URI from the environment variables
const mongoURI = process.env.MONGODB_URI;

const connectToDB= async ()=>{
    try{
      await mongoose.connect(mongoURI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      console.log("DB connected")
    }catch(error){
        console.log(error);
    }
};

connectToDB();