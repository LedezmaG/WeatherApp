import React from 'react';
import PrpoTypes from 'prop-types';
import WeatherIcons from 'react-weathericons';
import '../../Assets/Style/weatherdata/weatherdata.css';

const icons ={
    cloud:  "cloud",
    sun:    "day-sunny",
    rain:   "day-rain",
    snow:   "snow",
    tunder: "day-thunderstorm",
    windy:  "day-windy",
}

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    const sizeIcon = "4x";
    if ( icon ) {
        return <WeatherIcons name={ icon } size={ sizeIcon } />
    }
    else{
        return <WeatherIcons name=" day-sunny " size={ sizeIcon } />
    }

}
const WeatherTemperature = ( { temperature, weatherState } ) => (
    <div className="weatherData_Info-tem">
        { getWeatherIcon(weatherState) }
        <span className="weatherData_Info_Tem-tem" >{ `${temperature} `}</span>
        <span className="weatherData_Info_Tem-type" >{ ` C `}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PrpoTypes.number.isRequired,
    weatherState: PrpoTypes.string.isRequired,
}

export default WeatherTemperature