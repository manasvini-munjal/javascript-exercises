const removeFromArray = function(...args) {
    let arrLength = arguments[0].length;
    let removedArgs = [...args].slice(1);
    let originalArr = arguments[0];
    let resultArr = [];
    for (let i=0; i < arrLength; i++) {
       resultArr = originalArr.filter(item => !removedArgs.includes(item));
    }
    return resultArr;
    
   };

// Do not edit below this line
module.exports = removeFromArray;
