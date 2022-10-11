// Check APT, Promise, fetch, Json sever 

// Promsie 
// setTimeout(function(){
//     console.log(1)
//     setTimeout(() => {
//         console.log(2);
//         setTimeout(() => {
//             console.log(3);
//             setTimeout(() => {
//                 console.log(4);
//             },1000);
//         },1000);   
//     },1000);
// },1000);


//  1. new Promise 
//  2.  Excutor

var promise = new Promise(
    // Excutor
    function(resolve, reject){
        //  logic
        // thanh cong: resolve();
        // that bai: reject()
    }
);

promise
    .then(function() {
        console.log
    })
    .catch(function() {
        
    })
    .finally(function() {
        
    })
