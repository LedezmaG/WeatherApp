import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import trasformWeatherData from './../../Services/TrasformWeatherData.js';
import { call_api } from './../../Constants/Call_API';
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
        const { city, data } = this.state;
        if (data) {
            return(
                <div className="weatherData_content">
                    <Location city={ city } />
                    <WeatherData data={ data } />
                </div>    
            )
        }
        else{
            return(
                <div className="weatherData_content center-center">
                    <CircularProgress />
                </div>    
            )
        }
        
    }
}

export default WeatherLocation