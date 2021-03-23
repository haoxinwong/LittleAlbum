/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var file = require("../models/file.js");
//index
exports.showIndex = function(req,res,next){
    file.getAllAlbums(function(err,allAlbums){
        //err 
        if(err){
            next();
            return;
        }
        res.render("index",{
            "albums":allAlbums
        });
    });
};

exports.showAlbum = function(req,res,next){

    var albumName=req.params.albumName;

    file.getAllImagesByAlbumName(albumName,function(err,imagesArray){
        if(err){
            next();
            return;
        }
        res.render("album",{
            "albumname":albumName,
            "images":imagesArray
        });
    });
};
