const convertToCelsius = function(f) {
  // C = (F - 32) * 5/9
  result = (f - 32) * 5/9;
  if (result === 0) {
    return 0
  } else {
    return Number(result.toFixed(1));
  }
};

const convertToFahrenheit = function(c) {
  // F = (C * 9/5) + 32
  result = (c * 9/5) + 32;
  if (result === 0) {
    return 0
  } else {
    return Number(result.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
