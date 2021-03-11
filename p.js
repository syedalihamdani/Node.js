const express=require("express");
const app=express();
const port=80;

app.get("/",(req,res)=>{
    res.status(200).send("This is homepage of my first express app with Ali.");
});
app.get("/ about",(req,res)=>{
    res.send("This is about page  of my first express app ")
});
app.post("/ about",(req,res)=>{
    res.send("This is about page of first express app.")
});
app.get("/ this",(req,res)=>{
    res.status(404).send("This page is not found on Ali website");
});
app.listen(port, ()=>{
    console.log(`The application is started successfully on port  ${port}`);
});