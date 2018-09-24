import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
    <div class="test"> 
        <h1>{destination}</h1>
        <p>{country}</p>
        <img src={photo} alt=""/>
        <p>{distance}</p>
    </div>

);

export default Travel;