// import Convert from 'convert-units';

// const getTem = kelvin => {
//     return Convert(kelvin).from("k").to("c");
// }

const getWeatherState = weatherData => {
    return 'windy';
}

const trasformWeatherData = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState =  weather_data;
    const { name } =  weather_data;
    // const temFinal = this.getTem(temp);
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