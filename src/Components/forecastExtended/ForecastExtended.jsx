import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';

const week = [
    'monday',
    'tuesday',
    'wenday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
];

const data = {
    temperature: 10 ,
    weatherState: 10 ,
    humidity: 'normal',
    wind: 'normal' 
};


class ForecastExtended extends Component {

    render () {
        return(
            <>
                <h1> { this.props.city } </h1>
                { week.map ( day => ( 
                    <ForecastItem 
                        city= { this.props.city }
                        day= { day }
                        hour={ 10 }
                        data={ data }
                        /> 
                ))}
            </>
        )
    }
}

ForecastExtended.propTypes = {
    city:   PropTypes.string.isRequired,
}

export default ForecastExtended