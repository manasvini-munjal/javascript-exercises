const convertToCelsius = function(temp) {
  let tempInC = ((temp -32) * 5/9);
  return Math.round(tempInC * 10)/ 10;
};

const convertToFahrenheit = function(temp) {
  let tempInF = (temp * 1.8) + 32;
  return Math.round(tempInF * 10)/ 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
