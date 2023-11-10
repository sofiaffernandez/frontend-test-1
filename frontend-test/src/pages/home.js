import React, {  useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import moneda2 from '../images/moneda2.png';
import moneda1 from '../images/moneda1.gif';
import moneda50 from '../images/moneda50.png';
import moneda20 from '../images/moneda20.gif';
import moneda5 from '../images/moneda5.png';
import mano from '../images/mano.png';



function Home() {
    const navigate = useNavigate ();

    useEffect(() => {
        return () => {
          window.onbeforeunload = null;
        };
      }, []);

    const navigateCamara = () => {
        navigate('/camara');
      };



    return (
        <div>
            <div>
                <h2>Selecciona moneda</h2>
                <p>Para la correcta medición es necesario el uso de una moneda en el centro de la palma de tu mano. </p>
            </div>
            <section>
                <p>Puedes usar una de estas modenas</p>
                <div className='monedas'>
                    <img src={moneda2} alt='moneda de dos euros'/>
                    <img src={moneda1} alt='moneda de un euro'/>
                    <img src={moneda50} alt='moneda de cincuenta centimos'/>
                    <img src={moneda20} alt='moneda de veinte centimos'/>
                    <img src={moneda5} alt='moneda de cinco centimos'/>
                </div>
                <p>Coloca la moneda en el centro de la palma de tu mano</p>
                <div className='mano'>
                    <img className='mano' src={mano} alt='Ilustración de una mano con una moneda en la palma'/>
                </div>
            </section>
            <section>
                <label for="optionAnillo">¿Cómo te gusta llevar el anillo?</label>
                <label className="opcion" for="Ajustado">Ajustado
                    <input type="radio" id="Ajustado" name="opcion" value="Ajustado" />
                </label>
                <label className='opcion' for="Suelto">Suelto
                    <input type="radio" id="Suelto" name="opcion" value="Suelto" />
                </label>
            </section>

            <div className='botones'>
                <button className='volver' onClick={() => window.history.back()}>Volver</button>
                <button className='siguiente'onClick={() => navigateCamara}>Siguiente</button>
            </div>

        </div>
    )
}
  
export default Home;

