import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { Label, Segment, Container } from 'semantic-ui-react'
import { MarginedLabel } from './card-tag';

const Social = ({ data }) => (
  <Container>
    <Segment raised>
      <Label as='span' color='teal' ribbon>
        Social Connection
      </Label>
      {data.map(m => (
        <MarginedLabel
          key={m.name}
          as='a'
          color='grey'
          content={m.name}
          icon={m.icon}
          onClick={() => window.location.href = m.link}
        />
      ))}
    </Segment>
  </Container>
);

Social.propTypes = {
  data: arrayOf(shape({
    name: string,
    link: string,
  })).isRequired,
};

export default Social;
