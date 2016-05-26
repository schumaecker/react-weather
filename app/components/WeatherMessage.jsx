var React = require('react');

var WeatherMessage = ({weather, location}) => {
  return (
  	<div>
    <h3 className="result-string text-center">It's it {(weather.temp).toFixed(0)} degrees F in {location}.</h3>
    <h3 className="result-string text-center">Relative humidity is {(weather.humidity).toFixed(0)}%.</h3>
    </div>
  )
};

module.exports = WeatherMessage;
