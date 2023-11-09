import React from 'react';

function Resultados(datosFoto) {
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
        <button>Volver</button>
    </div>
  )
}
  
export default Resultados;