import React from 'react'
import CardBack from "./CardBack"
import CardFront from "./CardFront"

const Card = ({info}) => {
    return(
        <>
        <CardFront img={info.img} sin azucar={info.sinAzucar} nuevo={info.nuevo} />
        <CardBack /> 
        </>
    ) 
}

export default Card