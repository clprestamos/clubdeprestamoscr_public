import React from 'react';
import { connect } from 'react-redux';

const LoanRequest = props => <div>Solicitudes: {props.authData.username}</div>;

const mapStateToProps = state => ({
  authData: state.user,
});

export default connect(mapStateToProps)(LoanRequest);
