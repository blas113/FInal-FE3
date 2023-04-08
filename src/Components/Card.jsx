import React from "react";
import { useEffect } from "react";
import {Link} from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";



const Card = ({ card }) => {

  
  const {theme,fav,setFav} = useContextGlobal()

  useEffect(()=>{
    localStorage.setItem("favs", JSON.stringify(fav));
  },[fav])

  const addFav = (alert)=>{
    if(fav.some(favId => favId.id === alert.id)){
      alert("El dentista ya se encuentra dentro de favoritos");
    }
    else{
      setFav([...fav,alert])
      alert("Se agrego correctamente a favoritos");
    }
  }

  return (
    <div className={theme === 'dark' ? 'card dark':'card'}>
      <Link to={`/dentist/${card.id}`}>
        <img src='/images/doctor.jpg' alt="Doctor" style={{width: 200}}></img>
        <p>{card.name}</p>
        <p>{card.username}</p>
      </Link>
        <button onClick={()=>addFav(card)} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
