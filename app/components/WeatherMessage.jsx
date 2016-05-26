var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h3>It's it {(temp).toFixed(0)} degrees F in {location}.</h3>
  )
};

module.exports = WeatherMessage;
