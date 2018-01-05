import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import autobind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';

import * as MyInvestsActions from '../../../actions/MyInvests';
import MyInvestsComponent from './MyInvests/MyInvestsComponent';

class MyInvests extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = props;
    this.boundActionCreators = bindActionCreators({
      MyInvestsActions,
    }, dispatch);
    autobind(this);
  }
  componentDidMount() {
    const { dispatch } = this.props;
    const { userId } = this.props.authData;
    dispatch(MyInvestsActions.getMyInvests(userId));
  }
  render() {
    const ComponentRoute = ({ component: Wrap, ...rest }) => (
      <Route
        {...rest}
        render={props => (
          <Wrap {...props} myinvests={this.props.myinvests} />
        )}
      />
    );
    return (
      <div className="opportunities">
        <Card>
          <Card.Content>
            <Card.Header>
              Mis inversiones
            </Card.Header>
          </Card.Content>
        </Card>
        <Switch>
          <ComponentRoute path="/inversionista/mis-inversiones/:type?" component={MyInvestsComponent} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authData: state.user.data,
  myinvests: state.myinvests,
});

export default connect(mapStateToProps)(MyInvests);
