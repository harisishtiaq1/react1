const bodyParser = require("body-parser");
const express=require("express");
const morgan = require("morgan");
const app=express();
const port=8000;
const router=require("./routes/user.route")
const logger=require("morgan")
app.use(function(req,res,next){
    console.log("This function will run every time");
    console.log(req.url);
    next();
})
app.use(function(req,res,next){
    console.log("Moving to the next");
    next();
})
app.use(logger('dev'))
app.use(bodyParser.urlencoded())
app.use(bodyParser.json());

app.use("/user",router)
const routerLevelMiddleware=function(req,res,next){
    console.log("router level middleware");
    next();
}

app.listen(port,function(){
 console.log(`Server is running at ${port}`);
})