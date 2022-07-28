import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Current(props) {
    let icon="";
    switch(props.icon){
        case '01d':
            icon='CLEAR_DAY';
            break;
        case '01n':
            icon='CLEAR_NIGHT';
            break;
        case '02d':
            icon='PARTLY_CLOUDY_DAY';
            break;
        case '02n':
            icon='PARTLY_CLOUDY_NIGHT';
            break;
        case '03d':
            icon='CLOUDY';
            break;
        case '03n':
            icon='CLOUDY';
            break;
        case '04d':
            icon='CLOUDY';
            break;
        case '04n':
            icon='CLOUDY';
            break;
        case '09d':
            icon='RAIN';
            break;
        case '09n':
            icon='RAIN';
            break;
        case '10d':
            icon='SLEET';
            break;
        case '10n':
            icon='SLEET';
            break;
        case '13d':
            icon='SNOW';
            break;
        case '13n':
            icon='SNOW';
            break;
        case '50d':
            icon='FOG';
            break;
        case '50n':
            icon='FOG';
            break;    
        default:
            icon='WIND';
            break;
    }    
        return (
            <div className="Current">
                <div className="firstRow">
                    <h1>{props.city}</h1>
                </div>
                <div className="secondRow">
                    <div className="colIcon">
                    <ReactAnimatedWeather icon={icon} color={'blueviolet'} size={50} animate={true}/>    
                    </div>
                    <div className="colCurrent">
                        <div className="rowTemp">
                            <span className="CurrentTemp">{Math.round(props.temperature)}</span> <span className="degree"> ℃|℉</span>
                        </div>
                        <div className="rowDay"></div>
                        <div className="rowTime"></div>
                    </div>
                    <div className="colCurrentDetails">
                        {props.description}
                        <br />
                        Wind Speed: {props.wind} km/h
                        <br />
                        humidity: {props.humidity}%
                    </div>
                </div>   
            </div>
        );
    

}
