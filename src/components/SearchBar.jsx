import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    /*Hago un form para que el usuario pueda ingresar la ciudad que quiera
    y la busque mediante el input, utilizo eventos*/
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
     <div className="search"> 
      <div className="input-group mb-3" >
        <div className="input-group-prepend">
          <input className="input-group-text" id="inputGroup-sizing-default" type="submit" value="Buscar" />
        </div>
        <input type="text" placeholder="Ciudad..." class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" value={city} onChange={e=> setCity(e.target.value)}/>
      </div>
     </div> 

      
    </form>
  );
}
