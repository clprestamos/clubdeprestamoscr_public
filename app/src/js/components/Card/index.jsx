import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Card, Icon } from 'semantic-ui-react';

import Button from '../Button';

const CardComponent = (props) => {
  const cards = _.map(props.cards, card => (
    <Card>
      <Card.Content>
        <Card.Header>
          <Icon name={card.icon} /> {card.header}
        </Card.Header>
      </Card.Content>
      <Card.Content>
        {card.content}
        <Button
          buttonType="default"
          text="Ver detalle"
          to={card.btnTo}
        />
      </Card.Content>
    </Card>
  ));
  return (
    <Card.Group>
      {cards}
    </Card.Group>
  );
};

CardComponent.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default CardComponent;
