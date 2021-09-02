"use strict";
let storer=function(one){
    return function(two){
        return function(three){
            console.log(one+" "+two+" "+three);
        }
    }
}
storer("1")("2")("cheese")