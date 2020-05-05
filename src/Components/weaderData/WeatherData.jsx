import React from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import '../../Assets/Style/weatherdata/weatherdata.css';
// import {
//     cloud,  
//     cloudy, 
//     sunny,  
//     rain,   
//     tunder, 
//     windy,  
//     snow,   
// } from '../Constants/weatherIcons';

const WeatherData = ( { data: {  temperature, weatherState, humidity, wind } } ) => (

    <div className="weatherData_Info">
        <WeatherTemperature temperature={ temperature }  weatherState={ weatherState } />
        <WeatherExtraInfo humidity={ humidity } wind={ wind } />
    </div>
);

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature:    PropTypes.number.isRequired,
        weatherState:   PropTypes.string.isRequired,
        humidity:       PropTypes.number.isRequired,
        wind:           PropTypes.string.isRequired,
    })
}

export default WeatherData