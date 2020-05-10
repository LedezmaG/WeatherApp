import React from 'react';
import WeatherLocation from './weaderData/WeatherLocation';
import PropTypes from 'prop-types';

const LocationList = ( { cities, onSelectedLocation }) => {

    const handleWeatherLocationClick = city => {
        console.log('handle click');
        onSelectedLocation( city );
    }

    return(
        <div>
            { cities.map( city => 
                <WeatherLocation 
                    key={ city } 
                    city={ city } 
                    OnWeatherLocationClick = { () => handleWeatherLocationClick ( city )}
                /> 
                
            )}
        </div>
    );
};


LocationList.propTypes = {
    cities:   PropTypes.array.isRequired, 
    onSelectedLocation: PropTypes.func,
}

export default LocationList