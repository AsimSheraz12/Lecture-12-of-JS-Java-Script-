// Synchronous Programming and Asynchrinous Programming Difference

//Synchronous Code

console.log("One");
console.log("Two");
console.log("Three");
console.log("Four\n\n\n\n");

//Asynchronous Code

console.log("A");
console.log("B");
setTimeout(() => {
    console.log("See The Difference We Itillize Function at third position but execute at last Asynchronous works like that which piece of code take time runs parallel and other code executes and when time of code completes than executes");
}, 4000); // 4000 means 4s " Give time in milli seconds ms & 1 second = 1000 ms So, 4 seconds = 4000 ms"
console.log("C");
console.log("D");