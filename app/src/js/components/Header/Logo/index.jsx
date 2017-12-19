import React from 'react';
import { Image } from 'semantic-ui-react';
import {
  Link,
} from 'react-router-dom';

const Logo = () => <div className="logo"><Link to="/"><Image src="/images/logo-blanco.png" alt="Club de Préstamos" /></Link></div>;

export default Logo;
