const convertToCelsius = function(fahrenheitTemperature) {
	const celsiusTemperature = (fahrenheitTemperature - 32) * 5/9;
	return (parseFloat(celsiusTemperature.toFixed(1)));
};

const convertToFahrenheit = function(celsiusTemperature) {
	const fahrenheitTemperature = celsiusTemperature * 9/5 + 32;
	return (parseFloat(fahrenheitTemperature.toFixed(1)));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
