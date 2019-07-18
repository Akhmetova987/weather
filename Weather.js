import React from "react";

const Weather = props => (
	<div className="weather__info">
	 {	
	 	props.city && <p className="weather__key"> Местоположение: 
	 		<span className="weather__value"> { props.city }, {props.country}</span>
	 	</p> 
	 }
	 { 	
	 	props.temp && <p className="weather__key"> Температура: 
	 		<span className="weather__value"> {props.temp}°C	</span>
	 	</p> 
	 }
	 { 	
	 	props.pressure && <p className="weather__key"> Атмосферное давление: 
	 		<span className="weather__value"> {props.pressure}Па </span>
	 	</p> 
	 }
	 { 	
	 	props.humidity && <p className="weather__key"> Влажность воздуха: 
	 		<span className="weather__value"> { props.humidity }% </span>
	 	</p> 
	 }
	 { 	
	 	props.sunrise && <p className="weather__key"> Восход солнца: 
	 		<span className="weather__value"> { props.sunrise } </span>
	 	</p> 
	 }
	 { 	
	 	props.sunset && <p className="weather__key"> Заход солнца: 
	 		<span className="weather__value"> { props.sunset } </span>
	 </p> 
	 }
	 { 	
	 	props.speed && <p className="weather__key"> Ветер: 
	 		<span className="weather__value"> {props.speed} м/с	</span>
	 	</p> 
	 }
	
	 { 
	 	props.error && <p className="weather__error">{ props.error }</p>  
	 }
	</div>
);

export default Weather;
