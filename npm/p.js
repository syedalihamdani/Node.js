const express=require("express");
const app=express();
const port=80;

app.get("/",(req,res)=>{
    res.send("This is homepage of my first express app with Ali.");
});

app.listen(port, ()=>{
    console.log(`The application is started successfully on port ${port}`)
})