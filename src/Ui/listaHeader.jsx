import React from 'react'
import "../Css/Header.css"


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

    </div>
  )
}

export default listaHeader