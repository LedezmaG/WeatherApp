import React from 'react';
import Location from './WeatherLocationName';
import WeatherData from './WeatherData';

const WeatherLocation = () => (
    <>
        <Location city={ 'Guadalajara' } />
        <WeatherData />
    </>
);

export default WeatherLocation