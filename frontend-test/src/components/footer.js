import React from 'react';
import logoAltaca from '../images/logoAltaca.png'

function Footer() {
  return (
    <footer>
      <p>Powered by <img src={logoAltaca} alt="logo Altaca"/></p>
    </footer>
  );
}
  
export default Footer;