var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var that = this;

    this.setState({isLoading: true});

    openWeatherMap.getWeather(location).then(function (weather) {
      that.setState({
        location: location,
        weather: weather,
        isLoading: false
      });
    }, function (errorMessage) {
      that.setState({isLoading: false});
      alert(errorMessage);
    });
  },
  componentDidMount: function(){
    var location = this.props.location.query.location;
    if (location && location.length > 0 ) {
      this.handleSearch(location);
    }
  },
  render: function () {
    var {isLoading, weather, location} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (weather && location) {
        return <WeatherMessage weather={weather} location={location}/>;
      }
    }

    return (
      <div>
        <h1 className="page-title">Get the Weather:</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;
