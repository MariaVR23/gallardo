import React, { useState } from 'react'

const ListaNombres = () => {
    const [nombre, setNombre]=useState('');
    const [nombres, setNombres]=useState([]);
    const guardar=()=>{
        setNombres([...nombres,nombre]);
        setNombre('');
    }
  return (
    <div>
        <p>Ingresa Nombres</p>
        <input type='text' value={nombre} onChange={(e)=> setNombre(e.target.value)}/>
        <button onClick={guardar}>Enviar</button>
        <ul>
            {
                nombres.map((uno, id)=>(<div key={id}>{uno}</div>))
            }
        </ul>
    </div>

  )
}

export default ListaNombres