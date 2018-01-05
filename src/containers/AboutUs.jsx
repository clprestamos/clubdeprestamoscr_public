import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { toggleMenuState } from '../actions';
import TitleHeader from '../components/TitleHeader';

import aboutUsImg from '../images/about-us.jpg';

const AboutUs = (props) => {
  props.toggleMenuState(false);
  return (
    <div className="internal-page about-us">
      <div className="content">
        <TitleHeader
          title="Acerca de nosotros"
          subHeader="Somos un grupo de costarricenses inspirados en la nueva economía del conocimiento, comercio justo y tecnología, que busca crear innovación financiera para el desarrollo social."
          imageHeader={aboutUsImg}
        />
        <div className="main-content">
          <p>Actualmente, los canales tradicionales para acceder al crédito presentan muchas barreras, en un número importante de casos, infranqueables para muchas personas; o extremadamente costosas. Así mismo, los ciudadanos superavitarios se tienen que conformar con intereses muy bajos, que ni siquiera evitan que el dinero pierda su valor en el tiempo por el efecto de la inflación.</p>
          <p>La otra opción es el crédito entre particulares, cuyos intereses son excesivos, superando los costos de los canales tradicionales, y se han dado lamentables casos donde la persona sufre consecuencias extrajudiciales en caso de mora.</p>
          <p>Por eso nos unimos con el fin de permitir a la sociedad participar activamente de las actividades de crédito e inversión, por medio de una comunidad <b>“peer to peer”</b> donde las personas presentan sus proyectos de crédito y otras personas también lo valoran para confiar el capital.</p>
          <p>Queremos acercar a las personas, que la economía esté en manos de la población y se disfrute de las ventajas tecnológicas para que el dinero fluya haciendo prosperar los sueños.</p>
          <p>Para ser miembro del Club de Préstamos solo se necesita sinceridad porque de ahí surge la buena fe, el negocio que beneficia a ambas partes y el bienestar que tanto requiere nuestro pueblo.</p>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    toggleMenuState,
  }, dispatch);

export default withRouter(connect(null, mapDispatchToProps)(AboutUs));
