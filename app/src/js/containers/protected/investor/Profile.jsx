import React from 'react';
import { connect } from 'react-redux';

const Profile = props => <div>Profile: {props.authData.username}</div>;

const mapStateToProps = state => ({
  authData: state.user,
});

export default connect(mapStateToProps)(Profile);
