// import Convert from 'convert-units';
import { sun, cloud, rain, snow, tunder, drizzile } from './../Constants/weatherIcons';

// const getTem = kelvin => {
//     return Convert(kelvin).from("k").to("c");
// }

const getWeatherState = weather => {

    // if ( weather <= 300 ) {
    //     return tunder;
    // } 
    // if ( weather < 400 ) {
    //     return drizzile;
    // } 
    // if ( weather < 500 ) {
    //     return cloud;
    // }  
    // if ( weather < 600 ) {
    //     return rain;
    // }
    // if ( weather < 700) {
    //     return snow;
    // }
    // if ( weather === 800 ){
        return sun;
    // }
}

const trasformWeatherData = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState =  weather_data.weather[0].id;
    const { name } =  weather_data;
    // const temFinal = this.getTem(temp);
    console.log( weather_data.weather[0].id );
    console.log( getWeatherState( weatherState ) );
    
    const data = {
        city:   name,
        data:{
            temperature:    temp,
            weatherState:   getWeatherState( weatherState ),
            humidity,
            wind:           `${speed} M/S`,
        }
    };
    return data;
}

export default trasformWeatherData