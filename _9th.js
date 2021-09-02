"use strict";
const given_Arr=[1,2,3,5,6];
for(let num=0;num<((given_Arr.length)-1);num++)
{
    if ((given_Arr[((num)+1)]-given_Arr[num])!=1){
        console.log("missing number is",given_Arr[num]+1);
    }
}