import React from 'react';
import { Image } from 'semantic-ui-react';
import {
  Link,
} from 'react-router-dom';

import logo from '../../../images/logo-blanco.png';

const Logo = () => <div className="logo"><Link to="/"><Image src={logo} alt="Club de Préstamos" /></Link></div>;

export default Logo;
