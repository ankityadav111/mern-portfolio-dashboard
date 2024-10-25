import mongoose from "mongoose"


const dbconnection = ()=>{
    mongoose.connect(process.env.MONGO_URI , {
        dbName: 'PORTFOLIO',
    })
    .then(() =>{
        console.log("Connected to Database");
    })
    .catch((error) =>{
        console.log(`Error while connection DB ${error}`);
        
    })
}

export default dbconnection;