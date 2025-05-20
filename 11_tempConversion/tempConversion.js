const convertToCelsius = function(f) {

  c = (f - 32) * 5 / 9

  console.log(c)
  return Math.round(c * 10) / 10

};

const convertToFahrenheit = function(c) {

    f =  c * 9 / 5  + 32 

    console.log(f)
    return Math.round(f * 10) / 10

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
