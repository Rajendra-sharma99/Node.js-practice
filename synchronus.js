// let a = 10;
// console.log("Hi this is first execution");

console.log('Start');

// Define a function to be executed after 2 seconds
function delayedFunction() {
    console.log('Inside setTimeout callback');
}

// Schedule the execution of the delayedFunction after 2000 milliseconds (2 seconds)
setTimeout(delayedFunction, 2000);

console.log('End');


