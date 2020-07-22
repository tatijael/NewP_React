import React from "react";
import CardFront from "./CardFront";
import CardBack from "./CardBack";


const Card = ({ info }) => {
  return (
    <div className="card">
      <div className="card-content">
        <CardFront
          img={info.img}
          sinAzucar={info.sinAzucar}
          nuevo={info.nuevo}
        />
        <CardBack nombre={info.nombre} puntuacion={info.puntuacion} dificultad={info.dificultad} tiempo={info.tiempo}/>
      </div>
    </div>
  );
};

export default Card;