"use strict";
function sam(params) {
    return params;    
}
let sam = function (params) {
    return params
};
console.log(sam(3));
sam(1);
//anonymous function
(function(){
    console.log("from anonymous function");
})();

//you can 