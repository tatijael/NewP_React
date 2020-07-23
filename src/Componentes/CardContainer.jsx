import React from "react";
import Card from "./Card";
import ListaRecetas from "../Components_reload/api"


const CardContainer = () =>{
    return (
<>
        <div><h1>PAsteles</h1></div>
    <div className="wrapper">
        
       
        {
            ListaRecetas.map((receta)=>
                <Card info={receta} key={receta.id} />
            )
        }
    </div>
    </>
    )
}
export default CardContainer