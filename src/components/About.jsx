import React from 'react';
import "./About.css"
import Linkedin from"../img/linkedin.png";
import Whatsapp from "../img/whatsapp.png";
import Github from "../img/github.png";

export default function About(){
    return (

        
          <div className="letra"> 
            <h1>About me</h1>
            <div className="contacto">
                <p>Esta pagina fue creada por Tomás Martinez</p>
                <br/>
                <p>Redes</p>
                <br/>
                <div className="iconosLyW">
                <div className="iconoL">
                   <a href="https://www.linkedin.com/in/tomas-martinez98/" target="_blank"> 
                    <img id="linkedin" src={Linkedin} width="30" height="30" className="d-inline-block align-top" alt="" />
                   </a> 
                </div>
                <div className="iconoW">
                   <a href="https://wa.link/wkyns9" target="_blank"> 
                    <img id="whatsapp" src={Whatsapp} width="30" height="30" className="d-inline-block align-top" alt="" />
                   </a> 
                </div>
                <div className="iconoG">
                    <a href="https://github.com/Tomassagustin32" target="_blank"> 
                      <img id="github" src={Github} width="30" height="30" className="d-inline-block align-top" alt="" />
                    </a> 
                </div>
                </div>
            </div>
          </div> 
        

    )
};