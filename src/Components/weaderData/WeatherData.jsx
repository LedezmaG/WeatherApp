import React from 'react';
import PropType from 'prop-types';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';

// import {
//     cloud,  
//     cloudy, 
//     sunny,  
//     rain,   
//     tunder, 
//     windy,  
//     snow,   
// } from '../Constants/weatherIcons';

const WheaterData = () => (
    <>
        <WeatherTemperature 
            temperature={ 20 }  
            weatherState={ "windy" } />
        <WeatherExtraInfo humidity={ 10 } wind={ "10 M/S" } />
    </>
);

export default WheaterData