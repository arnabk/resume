import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { Segment, Container } from 'semantic-ui-react'
import CardTag, { MarginedLabel } from './card-tag';

const OpenSource = ({ data }) => (
  <Container>
    <Segment raised>
      <CardTag as='span' color='teal' ribbon>
        Skills
      </CardTag>
      {data.map(m => (
        <MarginedLabel as='a' color={m.color} content={m.name} icon={m.icon} />
      ))}
    </Segment>
  </Container>
);

OpenSource.propTypes = {
  data: arrayOf(shape({
    name: string,
    color: string,
    icon: string,
  })).isRequired,
};

export default OpenSource;
