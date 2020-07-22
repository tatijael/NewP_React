import React from "react"

const CardFront = ({img, sinAzucar, nuevo})=>{
    return(
        <div>
           <img src={img} />
            {sinAzucar && <span>Sin Azucar</span>}
            {nuevo && <span>Nuevo</span>}
        </div>
    );
};

export default CardFront;