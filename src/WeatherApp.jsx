
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "sinnar",
        feelsLike: 24.05,
        humidity: 49,
        temp: 24.29,
        tempMax: 24.29,
        tempMin: 24.29,
        weather: "clear sky",
        windSpeed: 5.02,
    
    });
    let updateInfo =(newInfo) =>{
        setWeatherInfo(newInfo);
    };
    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather App By Shubh</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo}/>
        </div>
    );
}