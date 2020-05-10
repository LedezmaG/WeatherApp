
import { end_point, key } from './../Constants/Call_API';

const CallweatherApiByCity = city => {

    return `${end_point}?q=${city}&appid=${key}&units=metric`;

}

export default CallweatherApiByCity