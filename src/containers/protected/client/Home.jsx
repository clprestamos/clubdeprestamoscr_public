import React, { Component } from 'react';
import autobind from 'react-autobind';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Hero from '../../../components/Hero';
import Card from '../../../components/Card';

import * as File from '../../../actions/UploadFile';

class Home extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  }
  handleUpload(avatar) {
    const { dispatch } = this.props;
    if (!this.props.userProfile.avatar) {
      dispatch(File.uploadAvatar({ file: avatar.input }));
    } else {
      dispatch(File.changeAvatar(avatar));
    }
  }
  render() {
    const cards = [
      {
        icon: 'credit card alternative',
        header: 'Solicitud de crédito',
        content: 'Esta es la solicitud de préstamo que hemos recibido de su parte. Esta será publicada entre los miembros inversionista para que ellos lo valoren.',
        btnTo: '/cliente/solicitud-credito',
      },
      {
        icon: 'thumbs outline up',
        header: 'Préstamo aprobado',
        content: 'Esta es la solicitud de préstamo que hemos aprobado. Puede tener acceso a la lista de pagos a realizar a partir de la fecha de aprobación.',
        btnTo: '/cliente/prestamo-aprobado',
      },
    ];
    return (
      <div className="home">
        <Hero
          userProfile={this.props.userProfile}
          handleUpload={this.handleUpload}
        />
        <section>
          <Card cards={cards} />
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userProfile: state.userProfile,
});

export default withRouter(connect(mapStateToProps)(Home));
