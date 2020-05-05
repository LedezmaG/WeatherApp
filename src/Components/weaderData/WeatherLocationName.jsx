import React from 'react';
import PropTypes from 'prop-types';

const WeatherLocationName = ( {city} ) => (
    // Destructuring
    // const { city } = props;

    <div className="weatherLocation__city">
        <h1> 
            { city }
        </h1>
    </div>

);

WeatherLocationName.propTypes = {
    city: PropTypes.string.isRequired,
}

export default WeatherLocationName;