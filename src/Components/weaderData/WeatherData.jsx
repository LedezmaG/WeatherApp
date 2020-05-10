import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-flexbox-grid';
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
        <Col xs={12} md={6} >
            <WeatherTemperature temperature={ temperature }  weatherState={ weatherState } />
        </Col>
        <Col xs={12} md={6} >
            <WeatherExtraInfo humidity={ humidity } wind={ wind } />
        </Col>
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