import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import dbconnection from "./database/dbconnection.js";

const app = express()
dotenv.config({ path: "./config/config.env"});

// console.log(process.env.PORT)


// cors is use for connect frontend and backend
// use is a middleware
app.use(
    cors({
        origin: [process.env.PORTFOLIO_URL , process.env.DASHBOARD_URL],
        methods: ["GET" , "POST" , "DELETE" , "PUT"],
        credentials : true
    })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended : true}));

app.use(
    fileUpload({
        useTempFiles:true,
        tempFileDir : "/tmp/",
    })
)


dbconnection()




export default app;