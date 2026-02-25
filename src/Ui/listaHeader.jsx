import React from 'react'
import "../Css/Header.css"

import imgLupa from "../img/imgLupa.png"
import imgCurtir from "../img/imgCurtir.png"
import imgCarrinho from "../img/imgCarrinho.png"


const listaHeader = () => {
  return (
    <div className='header'>

        <div className="listaConjunta">
        <u className='ulHeader'l>
                    <li className='ulHeaderLista'><a href="#" className='ulHeaderListaLink'>Genre</a></li>
                    <li className='ulHeaderLista'><a href="#" className='ulHeaderListaLink'>Action</a></li>
                    <li className='ulHeaderLista'><a href="#">Battle Royale</a></li>
                    <li className='ulHeaderLista'><a href="#">Adventure</a></li>
                    <li className='ulHeaderLista'><a href="#">Strategy</a></li>
                    <li className='ulHeaderLista'><a href="#">Arcada</a></li>
            </u>

            <ul className='ulHeaderIcones'>
                <li className='ulHeaderListaImgs'><a href="#"><img src={imgLupa} alt="" /></a></li>
                <li className='ulHeaderListaImgs'><a href="#"><img src={imgCurtir} alt="" /></a></li>
                <li className='ulHeaderListaImgs'><a href="#"><img src={imgCarrinho} alt="" /></a></li>
            </ul>


            <button>Signup/Login</button>
        </div>


    </div>
  )
}

export default listaHeader