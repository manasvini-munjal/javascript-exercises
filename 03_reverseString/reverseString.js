const reverseString = function(string) {
    let arrayFromStr = string.split('');
    let length = arrayFromStr.length -1;
    let reversedStr = '';
    for(let i = length; i >= 0; i--) {
        reversedStr += arrayFromStr[i];
    }
    return reversedStr;
  };

// Do not edit below this line
module.exports = reverseString;
