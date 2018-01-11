import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import autobind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Form, Grid, Image, Header, Rating, Card, Dropdown, Progress, Segment, Label, Responsive } from 'semantic-ui-react';

import * as LoanOpportunity from '../../../actions/Opportunities';
import ButtonComponent from '../../../components/Button';
import InputField from '../../../components/Dashboard/InputField';
import SaveModal from '../../../components/SaveModal';

class Loan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErrors: false,
      isModalOpen: false,
      invest: 0,
      percentage: props.loan.percentage,
    };
    const { dispatch } = props;
    this.boundActionCreators = bindActionCreators({
      LoanOpportunity,
    }, dispatch);
    autobind(this);
  }
  componentDidMount() {
    const { dispatch } = this.props;
    const { loanId } = this.props.match.params;
    dispatch(LoanOpportunity.getLoanOpportunity(loanId));
    dispatch(LoanOpportunity.getLoansByInvestor(loanId));
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      percentage: nextProps.loan.percentage,
    });
  }
  handlePercentage(e, { value }) {
    const currentValue = this.props.loan.percentage + value;
    if (currentValue <= 100) {
      this.setState({
        percentage: currentValue,
        invest: value,
        hasErrors: false,
      });
    } else {
      this.setState({
        hasErrors: true,
      });
    }
  }
  handleSubmit() {
    if (!this.state.hasErrors) {
      this.handleModalOpen();
    }
  }
  handleModalOpen() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  saveChanges() {
    this.handleModalOpen();
    const { dispatch } = this.props;
    const { loanId } = this.props.loan;
    const { userId } = this.props.authData;
    const percentage = this.state.invest;
    dispatch(LoanOpportunity.saveInvest({ loanId, investorId: userId, percentage }));
  }
  render() {
    const {
      name,
      lastName,
      identification,
      loanId,
      score,
      amount,
      investors,
      term,
      bank,
      reason,
      clientAccount,
      interest,
      stateName,
    } = this.props.loan;
    const options = [
      { key: 1, text: '20%', value: 20 },
      { key: 2, text: '40%', value: 40 },
      { key: 3, text: '60%', value: 60 },
      { key: 4, text: '80%', value: 80 },
      { key: 5, text: '100%', value: 100 },
    ];
    const avatarContent = (
      <div>
        <Image src="https://react.semantic-ui.com/assets/images/wireframe/square-image.png" size="small" circular />
        <Header as="h3">
          {name} {lastName}
          <Header.Subheader>
            Céd: {identification}
          </Header.Subheader>
          <Header.Subheader>
            Préstamo #{loanId}
          </Header.Subheader>
        </Header>
        <Rating maxRating={5} defaultRating={this.props.loan.score ? score : 0} icon="star" size="large" disabled />
      </div>
    );
    const formContent = (
      <Form>
        <Form.Group widths="equal">
          <Form.Field>
            <InputField
              inputType="text"
              labelText="Monto préstamo:"
              defaultValue={`₡ ${amount}`}
              readonly
            />
          </Form.Field>
          <Form.Field>
            <InputField
              inputType="text"
              labelText="Número de inversionistas:"
              defaultValue={investors}
              readonly
            />
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field>
            <InputField
              inputType="text"
              labelText="Plazo:"
              defaultValue={term}
              readonly
            />
          </Form.Field>
          <Form.Field>
            <InputField
              inputType="text"
              labelText="Banco:"
              defaultValue={bank}
              readonly
            />
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field>
            <InputField
              inputType="text"
              labelText="Motivo:"
              defaultValue={reason}
              readonly
            />
          </Form.Field>
          <Form.Field>
            <InputField
              inputType="text"
              labelText="Cuenta cliente:"
              defaultValue={clientAccount}
              readonly
            />
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field>
            <InputField
              inputType="text"
              labelText="Tasa:"
              defaultValue={`${interest}%`}
              readonly
            />
          </Form.Field>
          <Form.Field>
            <InputField
              inputType="text"
              labelText="Estado:"
              defaultValue={stateName}
              readonly
            />
          </Form.Field>
        </Form.Group>
      </Form>
    );
    const investContent = (
      <Card>
        <Card.Content>
          <Card.Header>
            Deseo invertir
          </Card.Header>
        </Card.Content>
        <Card.Content className="content-form">
          { this.props.loan.percentage !== 100 ? (
            <Form>
              <Form.Field>
                <Progress percent={this.state.percentage} indicating progress="percent">Este préstamo le resta un {100 - this.state.percentage}%</Progress>
                <div className="invest-buttons">
                  <Dropdown
                    text="Porcentage a invertir"
                    scrolling
                    options={options}
                    simple
                    item
                    onChange={this.handlePercentage}
                    defaultValue={this.state.percentage}
                  />
                  <Label>Usted está invirtiendo <Label.Detail>{this.state.invest}%</Label.Detail></Label>
                </div>
                <div className="action-buttons">
                  { this.state.hasErrors ? (
                    <Segment inverted color="red">El porcentage a invertir es mayor al esperado, por favor seleccione otro porcentage igual o menor a {100 - this.state.percentage}%.</Segment>
                  ) : '' }
                  <ButtonComponent
                    buttonType="save"
                    text="Guardar cambios"
                    onClick={this.handleSubmit}
                    type="button"
                    floated="right"
                  />
                </div>
                <SaveModal isOpen={this.state.isModalOpen} handleCancel={this.handleModalOpen} handleSave={this.saveChanges} />
              </Form.Field>
            </Form>
          ) : (
            <Segment inverted color="green">Este préstamo ya posee un 100% de inversión, consulte otro préstamo <Link to="/inversionista/oportunidades/disponibles">AQUÍ</Link>.</Segment>
          )}
        </Card.Content>
      </Card>
    );
    return (
      <div className="loan">
        <h2>Detalle de solicitud de préstamo</h2>
        <Responsive minWidth={801}>
          <Grid celled className="box">
            <Grid.Row>
              <Grid.Column width={4} className="avatar">
                {avatarContent}
              </Grid.Column>
              <Grid.Column width={12} className="content-form">
                {formContent}
              </Grid.Column>
            </Grid.Row>
          </Grid>
          {investContent}
        </Responsive>
        <Responsive maxWidth={800}>
          {investContent}
          <Grid celled className="box">
            <Grid.Row>
              <Grid.Column width={16} className="avatar">
                {avatarContent}
              </Grid.Column>
              <Grid.Column width={16} className="content-form">
                {formContent}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Responsive>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loan: state.opportunities.loan,
  authData: state.user.data,
});

export default connect(mapStateToProps)(Loan);
