/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var fs = require("fs");

exports.getAllAlbums = function(callback){
    fs.readdir("./uploads",function(err,files){
        if(err){
            //err
            callback("No uploads folder found",null);
            return;
        };
        var allAlbums = [];
        (function iterator(i){
            if(i===files.length){
                callback(null,allAlbums);
                return;
            }
            fs.stat("./uploads/"+files[i],function(err,stats){
                if(err){
                    callback("can't find the file"+files[i],null);
                    return;
                }
                if(stats.isDirectory()){
                    allAlbums.push(files[i]);
                }
                iterator(i+1);
            });
        })(0);
    });
};


exports.getAllImagesByAlbumName = function(albumName,callback){
    fs.readdir("./uploads/"+albumName,function(err,files){
        if(err){
            callback("No uploads folder found",null);
            return;
        };
        var allImages = [];
        (function iterator(i){
            if(i===files.length){
                callback(null,allImages);
                return;
            }
            fs.stat("./uploads/"+albumName+"/"+files[i],function(err,stats){
                if(err){
                    callback("can't find the file"+files[i],null);
                }
                if(stats.isFile()){
                    allImages.push(files[i]);
                }
                iterator(i+1);
            });
        })(0);
    });
};