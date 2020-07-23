import React from 'react';
import { IoMdHeart, IoMdHeartHalf, IoMdHeartEmpty, IoIosStar, IoIosStarHalf, IoIosStarOutline, IoIosHourglass} from "react-icons/io";
import Score from './Score';

const CardBack = ({nombre, puntuacion, dificultad, tiempo}) =>{
    return (
        <div className='card-back'>
            <h1 className='receta-titulo'>{nombre}</h1>
    {/* <p className='card-description'>Puntuacion: {Puntuacion(puntuacion, 'heart')} </p> */}
    <p className='card-description'>Puntuacion: <Score score={puntuacion} icon="heart"/> </p>
            {/* <p className='card-description'>Dificultad: {Puntuacion(dificultad, 'stars')} </p> */}
            <p className='card-description'>Dificultad: <Score score={puntuacion} icon="start"/></p>
            <p className='card-description'>Tiempo:  {tiempo} <IoIosHourglass /></p>
        </div>
    );
};

export default CardBack;

const Puntuacion = (puntuacion, check) => {
    let Empty = (check === "heart") ? IoMdHeartEmpty : IoIosStarOutline;
    let Half = (check === "heart") ? IoMdHeartHalf : IoIosStarHalf;
    let Complete = (check === "heart") ? IoMdHeart : IoIosStar;

    if (puntuacion === 0) return <Empty />
    let cociente = Math.floor(puntuacion / 2);
    let resto = puntuacion % 2;
    let stars = [];
    for(let i = 1; i<= cociente; i++){
        stars.push(<Complete />)
    }
    if (resto !== 0 ) stars.push(<Half />)
    for (let i = stars.length; i < 5; i++){
        stars.push(<Empty />)
    }

    return stars
}


