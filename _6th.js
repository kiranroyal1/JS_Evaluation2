"use strict";
function func(virus) {
    this.name=virus;
    this.desc=function(){
        return "beware I am "+this.name;
    }
}
class Virusclass{
    constructor(virus){
        this.name=virus;
        this.desc=function(){
            return "beware I am class " + this.name;
        }
    }
}
let virus_Name1=new func("SARS");
console.log(virus_Name1.desc());
let virus_Name2=new Virusclass("Covid-19");
console.log(virus_Name2.desc());