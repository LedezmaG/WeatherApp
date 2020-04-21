import React from 'react';
import PropTypes from 'prop-types';

const WeatherLocationName = ( {city} ) => (
    // Destructuring
    // const { city } = props;

    <h1> 
        { city }
    </h1>

);

WeatherLocationName.propTypes = {
    city: PropTypes.string.isRequired,
}

export default WeatherLocationName;