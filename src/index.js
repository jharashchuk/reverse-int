module.exports = function reverse (n) {
  let num = Math.abs(n);   
  return String(num).split('').reverse().join(''); 
};
