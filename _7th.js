"use strict";
let arr1=[1,2,3,4,5];
let arr2=[];
let arr3=[];
let reduce_Storer=arr1.reduce((total,curr)=>(total+curr));
console.log(`using reduce ${reduce_Storer}`);
arr1=arr1.map((num)=>num+1);
console.log(`using array map ${arr1}`);
arr3=arr1.filter((num)=>(num<4));
console.log(`checking if each num>12 using filter ${arr3}`);


