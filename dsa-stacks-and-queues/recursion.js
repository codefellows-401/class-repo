// a for loop that counts down from 10 to 1

// for(let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// write it again with recursion

// function countdown(n) {
//   console.log(n);
//   countdown(n - 1);
// }
// function countdown(n) {
//   if(n === 1) {
//     return 1;
//   } else {
//     console.log(n);
//     countdown(n - 1);
//   }
// }


const sumTo = (n) => {
  if(n === 1) {
    return 1;
  } else {
    return n + sumTo(n - 1);
  }
};

console.log(sumTo(10));
