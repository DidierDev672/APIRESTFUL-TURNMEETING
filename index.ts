import express, { Express } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT ? parseInt(process.env.PORT, 1) : 3000;
const hostname = 'localhost';

app.listen(port, hostname, function(){
    console.log(`🚀 [server]: Server is running at running at https://localhost:${port}`);
}).on('error', (err: any) => {
    if(err.code === 'EDDRINUSE'){
        console.log('server startup error: address already in use');
    }else{
        console.log(err);
    }
});