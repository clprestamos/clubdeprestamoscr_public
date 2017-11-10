import React from 'react';
import {
  Link,
} from 'react-router-dom';

const Menu = () => (
  <div className="menu">
    <ul>
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/prestamos">Préstamos</Link></li>
      <li><Link to="/invierta">Invierta</Link></li>
      <li><Link to="/comofunciona">¿Cómo funciona?</Link></li>
      <li><Link to="/preguntasfrecuentes">Preguntas Frecuentes</Link></li>
      <li><Link to="/contacto">Contacto</Link></li>
    </ul>
  </div>
);

export default Menu;
