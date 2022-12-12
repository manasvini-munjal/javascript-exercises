
const palindromes = function (str) {
    let regex = /\W/gi;
    let reverseStr= '';
    let originalStr = str.replace(regex, '');
   // console.log(originalStr);
    for (let i = str.length-1; i >= 0; i--) {
      if(str[i].search(regex)) {
       reverseStr += str[i];
     }
   }
    return originalStr.toLowerCase() === reverseStr.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
