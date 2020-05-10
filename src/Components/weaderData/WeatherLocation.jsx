import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-flexbox-grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import trasformWeatherData from './../../Services/TrasformWeatherData.js';
import CallweatherApiByCity from './../../Services/CallWeatherAPI.js';
import Location from './WeatherLocationName';
import WeatherData from './WeatherData';
import '../../Assets/Style/weatherdata/weatherdata.css';

class WeatherLocation extends Component{

    constructor() {
        super();
        this.state = {
            city: null,
            data: null
        }
    }

    componentDidMount() {
        const call_api = CallweatherApiByCity( this.props.city );
        fetch(call_api)
        .then( result => result.json() )
        .then( result => {
            const newData = trasformWeatherData( result );
            this.setState({
                city: newData.city,
                data: newData.data
            });
        })
        .catch( error => console.log( 'error', error ) );
    }

    render(){
        const { OnWeatherLocationClick } = this.props;
        const { city, data } = this.state;
        if (data) {
            return(
                <Row>
                    <div className="weatherData_content" onClick={ OnWeatherLocationClick }>
                    <Col xs={12}>
                        <Location city={ city } />
                    </Col>
                    <Col xs={12}>
                        <WeatherData data={ data } />
                    </Col>
                    </div>    
                </Row>
            )
        }
        else{
            return(
                <Row>
                    <div className="weatherData_content center-center">
                        <CircularProgress />
                    </div>    
                </Row>
            )
        }
        
    }
}

WeatherLocation.propTypes = {
    city:   PropTypes.string.isRequired, 
    OnWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation