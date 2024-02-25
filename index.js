import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.listen(port,() =>{ 
    console.log("Server is running!");
})

app.get("/",(req,res) =>{
    res.sendFile(__dirname + "/public/index.html");
    res.status(200);
})

app.post("/submit",(req,res) => {
    console.log(req.body);
    res.status(200);
})