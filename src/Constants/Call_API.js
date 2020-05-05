const location = "Jalisco,Mx";
const key = "6f1867156353cc0fd25911b89f52df8c";
const end_point = "http://api.openweathermap.org/data/2.5/weather";

export const call_api = `${end_point}?q=${location}&appid=${key}&units=metric`;
