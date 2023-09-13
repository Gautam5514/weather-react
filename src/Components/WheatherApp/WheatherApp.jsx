import React from 'react'
import'./WheatherApp.css'

import search_icon from "../Assets/search.png"
import clear_icon from "../Assets/clear.png"
import cloud_icon from "../Assets/cloud.png"
import drizzle_icon from "../Assets/drizzle.png"
import rain_icon from "../Assets/rain.png"
import snow_icon from "../Assets/snow.png"
import wind_icon from "../Assets/wind.png"
import humidity_icon from "../Assets/humidity.png"

const WheatherApp = () => {

    let api_key = "4e4fde37a7c546b32629a7a78d68cf11";

    const search = async () => {
        const element = document.getElementsByClassName("cityInput");
        if(element[0].value==="")
        {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=57&${element[0].value}=-2.15&appid=${api_key}&units=metric`;
        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temperature = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("wether-location");

        humidity[0].inerHTML = data.main.humidity;
        wind[0].innerHTML = data.wind.speed;
        temperature[0].innerHTML = data.main.temp;
        location[0].innerHTML = data.name;
    }
  return (
    <div className='container'>
    <div className="top-bar">
    <input type="text" className="cityInput" placeholder='saerch' /> <span class="search-icon" > onClick={() => {search()}}
            <img src={search_icon} alt="" />
        </span>
        
    </div>
    <div className="weather-image">
        <img src={cloud_icon} alt="" />
    </div>
    <div className="weather-temp">24'c</div>
    <div className="weather-location">India</div>
    <div className="data-container">
        <div className="element">
            <img src={humidity_icon} alt="" className="icon" />
            <div className="data">
                <div className="humidity-percent">64%</div>
                <div className="text">Humidity</div>
            </div>
        </div>
        <div className="element">
            <img src={wind_icon} alt="" className="icon" />
            <div className="data">
                <div className="wind-rate">18 km/h</div>
                <div className="text">Wind Speed</div>
            </div>
        </div>
    </div>
    </div>
)
}

export default WheatherApp
