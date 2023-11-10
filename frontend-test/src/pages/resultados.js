import React from 'react';
import { useNavigate  } from 'react-router-dom';

function Resultados(datosFoto) {
  const navigate = useNavigate ();
  const navigateHome = () => {
    navigate('/');
  };  
  //mostrar los resultados y botón de volver 
  return (
    <div>
        <h2>Resultados</h2>
        {datosFoto ? (
        <div>
            <p>Índice: {datosFoto.index}</p>
            <p>Medio: {datosFoto.middle}</p>
            <p>Meñique: {datosFoto.pinky}</p>
            <p>Anular: {datosFoto.ring}</p>
            <p>Pulgar: {datosFoto.thumb}</p>
        </div>
        ) : (
        <p>No hay datos de foto disponibles.</p>
        
        )}
         <div className='botones'>
                <button className='volver' onClick={() => navigateHome}>Volver</button>
        </div>
    </div>
  )
}
  
export default Resultados;