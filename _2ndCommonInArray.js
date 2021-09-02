"use Strict";
//first array is bigger and descending,other ascending
console.time()
const sorted_Arr1 = [15, 13, 12, 10, 8, 4, 3, 2, 1];
const sorted_Arr2 = [1, 3, 4, 5, 6, 7, 9];
let found=false;
let ascend;
function orderchecker(arr) {
    if (arr[0] <=arr[((arr.length)-1) ]){
        ascend=true;
        return ascend;
    }
    else{
        ascend=false;
        return ascend;
    }
}
const arr1_Order = orderchecker(sorted_Arr1);
const arr2_Order = orderchecker(sorted_Arr2);
function compare1(ar1,ar2){
    for(let i = 0; i <= ((ar1.length) - 1); i++){
        for(let j = 0; j <= ((ar2.length) - 1); j++){
            if (ar1[i]==ar2[j]){
                console.log(`commmon numbers are from compare1: ${ar1[i]} :)`);
                found=true;
            }
        }
    }
    if (found==false)
        console.log("no common numbers are found :(");
}
//2nd compare
function compare2(ar1, ar2) {
    for (let i = 0; i <= ((ar1.length) - 1); i++) {
        for (let j = ((ar2.length) - 1); j >= 0; j--) {
            if (ar1[i] == ar2[j]) {
                console.log(`commmon numbers from compare 2 are : ${ar1[i]} :)`);
                found = true;
            }
        }
    }
    if (found == false)
        console.log("no common numbers are found :(");
}
//3rd compare
function compare3(ar1, ar2) {
    for (let i = ((ar1.length) - 1); i >= 0; i++) {
        for (let j = 0; j <= ((ar2.length) - 1); j--) {
            if (ar1[i] == ar2[j]) {
                console.log(`commmon numbers from compare 3 are : ${ar1[i]} :)`);
                found = true;
            }
        }
    }
    if (found == false)
        console.log("no common numbers are found :(");
}
//fourth compare
function compare4(ar1, ar2) {
    for (let i = ((ar1.length) - 1); i >= 0; i--) {
        for (let j = ((ar2.length) - 1); j >= 0; j--) {
            if (ar1[i] == ar2[j]) {
                console.log(`commmon numbers from compare 4 are : ${ar1[i]} :)`);
                found = true;
            }
        }
    }
    if (found == false)
        console.log("no common numbers are found :(");
}

//1st checking
if (arr1_Order == true && arr2_Order == true){
    if(sorted_Arr1.length <= sorted_Arr2.length)
        compare1(sorted_Arr1,sorted_Arr2);
    else
        compare1(sorted_Arr2,sorted_Arr1);
} 
//2nd checking
if (arr1_Order == true && arr2_Order == false) {
    if (sorted_Arr1.length <= sorted_Arr2.length)
        compare2(sorted_Arr1, sorted_Arr2);
    else
        compare3(sorted_Arr2, sorted_Arr1);
}
//3rd checking
if (arr1_Order == false && arr2_Order == true) {
    if (sorted_Arr1.length <= sorted_Arr2.length)
        compare3(sorted_Arr1, sorted_Arr2);
    else
        compare2(sorted_Arr2, sorted_Arr1);
}
//4th checking
if (arr1_Order == false && arr2_Order == false) {
    if (sorted_Arr1.length <= sorted_Arr2.length)
        compare4(sorted_Arr1, sorted_Arr2)
    else
        compare4(sorted_Arr2, sorted_Arr1)
}
console.timeEnd()