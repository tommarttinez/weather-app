import React from 'react';
import {Link} from 'react-router-dom';
import './Card.css';
//Paso propiedades que me llegan de la api
export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className="card">
        <div className="interior">
          {/*Boton para eliminar una carta*/}
          <div className='boton'>
            <button type="button" class="btn btn-danger" onClick={onClose}>X</button>
           </div>
           {/*Carta de clima con nombre de ciudad y temp max-min*/}
        <div className="card-body">
        <h5 className="card-title">{name}</h5>
            <div className='descripcion'>
              <p>Min</p>
              <p>{min}°</p>
              <p>Max</p>
              <p>{max}°</p>
            </div>          
             {/*Requiero la imagen que me da la api*/}  
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
              <Link to={`/ciudad/${id}`} >
                <h5>More...</h5>
              </Link>
        </div>
        </div>
      </div>            
         
    );
};
