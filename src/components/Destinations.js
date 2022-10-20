import React,{useState} from "react";
import {data} from "../data/data.js";
import "./Destinations.css";

    const Destinations =()=>{

        const[places, setPlaces] =useState(data);
   
        const handleRemoveDestination = (index1) =>{
            setPlaces(places=>
                places.filter((_places,index) => {
                 return index !== index1;
               }),
            );

          };

    return(
        <>
        {places.map(({id,name, info, image, price},index)=>(
            <div key={id} className="placesCard">
                <div className="placesImage"><img className="placesImage" src={image} alt={name}/></div>
                <div className="placesTitle">
                    <h4>{name}</h4>
                    <h4 className="placesPrice">${price}</h4>
                    
                </div>
                <p className="placesDescription">{info}</p>
                
                <button className="deletePlace" onClick={()=>handleRemoveDestination(index)}>Not interested</button>
            </div>
        ))}
        
        </>
    )
}

export default Destinations;