import React from "react";

export default function WeatherTemperature(props) {
   return (
     <div className="WeatherTemperature">
       <strong id="temperature">{Math.round(props.celsius)}</strong>
       <span className="units">
         °C 
       </span>
     </div>
   );
  }

