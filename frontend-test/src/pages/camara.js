import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import axios from 'axios';

const Camara = () => {
  const navigate = useNavigate ();
  const [datosFoto, setDatosFoto] = useState(null);

  //sacar la foto con canvas
  //enviar la foto con axios 
  //OJO HAY QUE PASAR PARAMETROS ANTERIORES


  //botones para volver y resultados
  const navigateHome = () => {
    navigate('/');
  };
  const navigateResultados = () => {
    navigate('/resultados');
  };

  return (
    <div>
      <h1>Captura de foto de la mano</h1>
      
        <div className='botones'>
                <button className='volver' onClick={() => navigateHome}>Volver</button>
                <button className='siguiente'onClick={() => navigateResultados (datosFoto)}>Resultados</button>
        </div>
    </div>
  );
};

export default Camara;
