const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 <0 || 
        typeof num1 !== 'number'|| 
        typeof num2 !== 'number') {
        return 'ERROR';
    }
      let largerNum = Math.max(num1, num2);
      let smallerNum = Math.min(num1, num2);
      let sum = 0;
      for(let i = smallerNum; i <= largerNum; i++){
        sum += i;
      }
      return sum;
    };

// Do not edit below this line
module.exports = sumAll;
