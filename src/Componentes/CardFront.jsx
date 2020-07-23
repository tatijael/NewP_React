import React from "react";

const CardFront = ({ img, sinAzucar, nuevo }) => {
  return (
    <div className="card-front">
      <img className="card-img" src={img} alt='Imagen' />
      <div className="card-tags">
        {sinAzucar && <span className="endulzante">Sin azucar</span>}
        {nuevo && <span className="receta-nueva">Nuevo</span>}
      </div>
    </div>
  );
};

export default CardFront;