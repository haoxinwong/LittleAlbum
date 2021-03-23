var express = require("express");
var router = require("./controller/router.js");
var app = express();

app.set("view engine","ejs");

//Routing
app.use(express.static("./public"));
app.use(express.static("./uploads"));

app.get("/",router.showIndex);
app.get("/:albumName",router.showAlbum);

//404
app.use(function(req,res){
    res.render("err");
});
app.listen(3000,"127.0.0.1");