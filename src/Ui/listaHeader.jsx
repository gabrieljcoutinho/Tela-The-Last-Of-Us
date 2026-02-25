import React from 'react'
import "../Css/Header.css"

import imgLupa from "../img/imgLupa.png"
import imgCurtir from "../img/imgCurtir.png"
import imgCarrinho from "../img/imgCarrinho.png"


const listaHeader = () => {
  return (
    <div className='header'>

            <ul>
                    <li><a href="#">Genre</a></li>
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Battle Royale</a></li>
                    <li><a href="#">Adventure</a></li>
                    <li><a href="#">Strategy</a></li>
                    <li><a href="#">Arcada</a></li>
            </ul>

            <ul>
                <li><a href="#"><img src={imgLupa} alt="" /></a></li>
                <li><a href="#"><img src={imgCurtir} alt="" /></a></li>
                <li><a href="#"><img src={} alt="" /></a></li>
            </ul>

    </div>
  )
}

export default listaHeader