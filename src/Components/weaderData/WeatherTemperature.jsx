import React from 'react';
import PrpoTypes from 'prop-types';
import WeatherIcons from 'react-weathericons';

const icons ={
    cloud:  "cloud",
    cloudy: "day-cloudy",
    sunny:  "day-sunny",
    rain:   "day-rain",
    tunder: "day-thunderstorm",
    windy:  "day-windy",
    snow:   "snow"
}

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if ( icon ) {
        return <WeatherIcons name={icon} size="2x" />
    }
    else{
        return <WeatherIcons name="day-sunny" size="2x" />
    }

}
const WeatherTemperature = ( { temperature, weatherState } ) => (
    <div>
        {
            getWeatherIcon(weatherState)
        }
        <span>{ `${temperature} C `}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PrpoTypes.number.isRequired,
    weatherState: PrpoTypes.string.isRequired,
}

export default WeatherTemperature