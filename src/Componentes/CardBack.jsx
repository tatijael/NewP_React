import React from 'react';
import { IoMdHeart, IoMdHeartHalf, IoMdHeartEmpty, IoIosStar, IoIosStarHalf, IoIosStarOutline, IoIosHourglass} from "react-icons/io";

const CardBack = ({nombre, puntuacion, dificultad, tiempo}) =>{
    return (
        <div className='card-back'>
            <h1 className='receta-titulo'>{nombre}</h1>
    <p className='card-description'>Puntuacion: {Puntuacion(puntuacion)} </p>
            <p className='card-description'>Dificultad:  {dificultad} <IoIosStar /><IoIosStarHalf /><IoIosStarOutline /></p>
            <p className='card-description'>Tiempo:  {tiempo} <IoIosHourglass /></p>
        </div>
    );
};

export default CardBack;

const Puntuacion = (puntuacion) => {
    if (puntuacion === 0) return <IoMdHeartEmpty />
    let cociente = Math.floor(puntuacion / 2);
    let resto = puntuacion % 2;
    let stars = [];
    for(let i = 1; i<= cociente; i++){
        stars.push(<IoMdHeart />)
    }
    if (resto !== 0 ) stars.push(<IoMdHeartHalf />)
    
    return stars
}


