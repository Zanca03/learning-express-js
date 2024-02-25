import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import morgan from "morgan";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

function logger(req,res,next) { //Custom Logging
    console.log("Request method: " + req.method);
    console.log("Request URL: " + req.url);
    next();
};

app.use(logger);

app.use(morgan("dev")); //Using Morgan to Log

app.use(bodyParser.urlencoded({extended: true}));

app.listen(port,() =>{ 
    console.log("Server is running!");
})

app.get("/",(req,res) =>{
    res.sendFile(__dirname + "/public/index.html");
    res.status(200);
})

app.post("/submit",(req,res) => {
    res.send(`<h1>Well Done, that's your band name:</h1><h3>${req.body.pet}${req.body.street}</h3>`);
    res.status(200);
})