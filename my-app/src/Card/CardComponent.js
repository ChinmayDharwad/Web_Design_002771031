import React from 'react'
import { useNavigate } from "react-router-dom";
import "./Card.css"

const CardComponent = ({title,imageUrl,body}) => {
  const navigate = useNavigate();
  const next_about =()=>{
    navigate('/about');
  }

  return (
    <div className='card_app'>
    <div className='image-container'>
      <img src = {imageUrl} alt=''/>
    </div>
    <div className='card-content'>
    <div className='card-title'>
      <h4>{title}</h4>
    </div>
    <div className='card-body'>
      <p>{body}</p>
    </div>
    </div>
    
    <div className='btn'>
      <button onClick={()=>next_about()}>
        <a>
          Apply
        </a>
      </button>
    </div>
    </div>
  )
}

export default CardComponent