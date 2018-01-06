import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import autobind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';

import * as OpportunitiesActions from '../../../actions/Opportunities';
import OpportunitiesComponent from './Opportunities/OpportunitiesComponent';

class Opportunities extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = props;
    this.boundActionCreators = bindActionCreators({
      OpportunitiesActions,
    }, dispatch);
    autobind(this);
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(OpportunitiesActions.getOpportunities());
  }
  render() {
    const ComponentRoute = ({ component: Wrap, ...rest }) => (
      <Route
        {...rest}
        render={props => (
          <Wrap {...props} opportunities={this.props.opportunities} />
        )}
      />
    );
    return (
      <div className="opportunities">
        <Card>
          <Card.Content>
            <Card.Header>
              Oportunidades de inversión
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <p>En esta sección, usted podrá ver todas las oportunidades de inversión que están disponibles en el sistema.</p>
          </Card.Content>
        </Card>
        <Switch>
          <ComponentRoute path="/inversionista/oportunidades/:type?" component={OpportunitiesComponent} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  opportunities: state.opportunities,
});

export default connect(mapStateToProps)(Opportunities);
