//  In Javascript, functions are not just functions. They are closures.
// inner function
// any function where you are using outside variables inside of a function is a closure
// Closures are nothing but functions plus preserved data

var me = "Bruce Wayne";

function greetMe() {
  console.log("Hello " + me);
}

greetMe();

let f;

if (true) {
  let i = 1;

  f = () => {
    console.log(i);
  };
}

f();
