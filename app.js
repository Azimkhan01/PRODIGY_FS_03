//all npm modules
const express = require("express");
const app = express();
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const path = require("path");
const hbs = require("hbs");
const {router} = require("./router/routes");

//all middlewares
app.use("/public",express.static(path.join(__dirname,"/public")));
app.use(express.json());
app.use(express.urlencoded());
app.use(helmet());
app.use(cookieParser());
app.use("/",router);

app.set("view engine","hbs");
hbs.registerPartials(path.join(__dirname,"/views/partials"));

app.listen(8000,"127.0.0.1",()=>{
    console.log("the application is running on 127.0.0.1:8000");
})
