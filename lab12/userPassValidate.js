let userPass = 'xdjkfdfdkjfdskds';

// minimum 8 symbols
let re = /\w{8,}/;
// console.log(typeof(re));

console.log( re.test(userPass));