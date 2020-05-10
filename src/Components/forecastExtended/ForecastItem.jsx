import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../weaderData/WeatherData';

const ForecastItem = ( { city, day, hour, data } ) => (
    <>
        Dia - { day } Hora - { hour } <br/>
        <WeatherData data={ data } />
    </>
)

ForecastItem.propTypes = {
    city: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    day: PropTypes.string.isRequired,
    data: PropTypes.shape({
        temperature:    PropTypes.number.isRequired,
        weatherState:   PropTypes.string.isRequired,
        humidity:       PropTypes.number.isRequired,
        wind:           PropTypes.string.isRequired,
    })
}

export default ForecastItem