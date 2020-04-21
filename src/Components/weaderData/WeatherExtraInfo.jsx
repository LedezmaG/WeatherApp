import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ( { humidity , wind } ) => (
    <>
        <span>{ `${humidity} % - ` }</span>
        <span>{ `${wind} Viento` }</span>
    </>
);

WeatherExtraInfo.propTypes = {
    humidity:   PropTypes.number.isRequired,
    wind:       PropTypes.string.isRequired,       
}

export default WeatherExtraInfo