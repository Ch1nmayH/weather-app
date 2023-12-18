import React, { useState } from 'react' 
import './WeatherApp.css'
import search_icon from '../Assets/search.png'
import clear_icon from '../Assets/clear.png'
import cloud_icon from '../Assets/cloud.png'
import drizzzle_icon from '../Assets/drizzle.png'
import humidity_icon from '../Assets/humidity.png'
import rain_icon from '../Assets/rain.png'
import wind_icon from '../Assets/wind.png'
import snow_icon from '../Assets/snow.png'
import mist from '../Assets/mist.png'
import thunder from '../Assets/thunder.png'
import brokenCloud from '../Assets/brokenCloud.png'
import shattered_icon from '../Assets/shatteredCloud.png'


const WeatherApp = ()=>{

    let api  = '';
    const [wIcon,setwIcon] = useState(clear_icon);

    const getInput = async ()=>{
        let location = document.getElementsByClassName('weather-location')[0];
        let temp = document.getElementsByClassName('weather-temp')[0];
        let humidityPercentage = document.getElementsByClassName('humidity-percentage')[0];
        let windPercentage = document.getElementsByClassName('wind-percentage')[0];
        

        let city = document.getElementsByClassName('cityInput')
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city[0].value}&units=metric&appid=${api}`
        // console.log(url)

        let  response = await fetch(url);
        let data = await response.json();
        // console.log(data.main.temp)

        location.innerHTML = data.name;
        temp.innerHTML = `${data.main.temp} °C `;
        humidityPercentage.innerHTML = `${data.main.humidity} %`;
        windPercentage.innerHTML = `${data.wind.speed} km / hr`;

        // console.log(data.weather[0].icon);

        if(data.weather[0].icon === '01d' || data.weather[0].icon === '01n') {
            setwIcon(clear_icon);
        }

        else if(data.weather[0].icon === '02d' || data.weather[0].icon === '02n') {
            setwIcon(cloud_icon);
        }
        else if(data.weather[0].icon === '03d' || data.weather[0].icon === '03n') {
            setwIcon(shattered_icon);
        }
        else if(data.weather[0].icon === '04d' || data.weather[0].icon === '04n') {
            setwIcon(brokenCloud);
        }
        else if(data.weather[0].icon === '09d' || data.weather[0].icon === '09n') {
            setwIcon(drizzzle_icon);
        }
        else if(data.weather[0].icon === '10d' || data.weather[0].icon === '10n') {
            setwIcon(rain_icon);
        }
        else if(data.weather[0].icon === '11d' || data.weather[0].icon === '11n') {
            setwIcon(thunder);
        }
        else if(data.weather[0].icon === '13d' || data.weather[0].icon === '13n') {
            setwIcon(snow_icon);
        }
        else if(data.weather[0].icon === '50d' || data.weather[0].icon === '50n') {
            setwIcon(mist);
        }

        else{

            setwIcon(clear_icon);
        }
    }
    return(
        <>

        <div className="container">
            <div className="top-bar">
                <input type='text' className='cityInput' placeholder='search'></input>
                <div className="search-icon" onClick={()=>{
                    getInput()
                }}>
                    <img src={search_icon} alt="" />
                </div>
            </div>
            <div className="weather-image">
                <img src={wIcon} alt="" />
            </div>
            <div className="weather-temp">
                28°C
            </div>
            <div className="weather-location">London</div>
            <div className="data-container">


                <div className="element">
                    <img src={humidity_icon} className='icon' alt="" />
                    <div className="data">
                        <div className="humidity-percentage">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>


                <div className="element">
                    <img src={wind_icon} className='icon' alt="" />
                    <div className="data">
                        <div className="wind-percentage">18 km / hr</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )


}

export default WeatherApp