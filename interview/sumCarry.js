// // sum(1)(2)(3)(4)....(n)

// // let sum = function(a) {
// //   return function(b) {
// //     return b ? sum(a + b) : a
// //   }
// // }

// let sum = function(a) {
//   let currentSum = a;

//   function f(b) {
//     currentSum += b;
//     return f;
//   }

//   f.valueOf = function() {
//     return currentSum;
//   };

//   return f;
// };

// // console.log(+sum(2)(3)(4)(5)); // Output: 14

// console.log(sum(2)(3)(4)(5))


let sum = function(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.valueOf = function() {
    return currentSum;
  };

  return f;
};

console.log(+sum(2)(3)(4)(5)); // Output: 14
