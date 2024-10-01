// use bind
let multiply = function(x, y) {
  console.log(x * y)
}

// let multiplyByTWO = function(y) {
//   let x = 2;
//   console.log(x * y)
// }

let multiplyByTwo = multiply.bind(this, 2)

multiplyByTwo(5)

let multiplyByThree = multiply.bind(this, 3);

multiplyByThree(10)

//  use closers 
let sum = function(x) {
  return function(y) {
    console.log(x + y)
  }
}

let add20 = sum(20);
add20(100);

let add50 = sum(50);
add50(100)

