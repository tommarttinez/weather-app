import React from "react";
import './Ciudad.css';

export default function Ciudad({city}) {
    if(city){  
    return (
         /*El componente ciudad muestra información específica de una ciudad*/
        <div className="ciudad">
                <div className="container">
                    <div className="neon">
                        <h1>{city.name}</h1>
                    </div>
                     {/*Muestro la información que me da la api*/}
                    <div className="info">
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
            </div>
        </div>
    )
    } else{
        return( 
        <div>
            No se encontró la ciudad
        </div>
        )
    }
}