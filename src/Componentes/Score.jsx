import React from "react";
import { IoMdHeartEmpty, IoMdHeartHalf, IoMdHeart, IoIosStarOutline, IoIosStarHalf, IoIosStar } from "react-icons/io";

const ICONS = {
    heart:{
        empty:<IoMdHeartEmpty></IoMdHeartEmpty>,
        half:<IoMdHeartHalf/>,
        complete:<IoMdHeart/>
    },
    start:{
        empty:<IoIosStarOutline/>,
        half:<IoIosStarHalf/>,
        complete:<IoIosStar />
    },
}

const getIcons = (count,icon) => {
    const aux = [];
    for(let i = 1; i<= count; i++){
        aux.push(icon)
    }
    return aux;
}

const Score = ({score,icon}) => {
    console.log(score,icon)
    const icons = ICONS[icon];
    console.log(icons)
    const rest = score % 2;
    const complete = getIcons(((score-rest)/2),icons.complete);
    const half = rest? icons.half: null;
    const empty = getIcons(((10-score-rest)/2),icons.empty);
  
    return [...complete,half,...empty];
}

export default Score;
