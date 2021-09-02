"use strict";
let num_String=" ";
const max_Num=50;
for(let i=1;i<=max_Num;i++){
    num_String+=i;
}
let matched=num_String.match(/0/g);
console.log(`Total zeros from 1 to ${max_Num} are : ${matched.length}`);
