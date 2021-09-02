"use strict";
function funclass(name){
    this.name=name;
    this.hello=function(){
        return "I am inside "+this.name;
    }
}

let name1=new funclass("keanu");
console.log(name1.name);
console.log(name1.hello());
let name2=new funclass("Nolan");
console.log(name2.name);
console.log(name2.hello());