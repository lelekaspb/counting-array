"use strict";

const myArray = [];
let counter = 0;

function countloop() {
  myArray.unshift(counter);
  console.log(myArray);
  counter++;
  if (myArray.length > 8) {
    myArray.length = 8;
  }
  setTimeout(countloop, 1000);
}

countloop();
