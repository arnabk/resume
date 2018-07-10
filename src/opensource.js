import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { Label, Segment, Container } from 'semantic-ui-react'
import styled from 'styled-components';
import CardTag from './card-tag';

const MarginedLabelWrapper = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
`;

const OpenSource = ({ data }) => (
  <Container>
    <Segment raised>
      <CardTag as='span' color='teal' ribbon>
        Open Source Projects
      </CardTag>
      {data.map(m => (
        <MarginedLabelWrapper key={m.name}>
          <Label as='a' color='green' tag onClick={() => window.location.href = m.link}>
            {m.name}
          </Label>
          <span>{m.description}</span>
        </MarginedLabelWrapper>
      ))}
    </Segment>
  </Container>
);

OpenSource.propTypes = {
  data: arrayOf(shape({
    name: string,
    link: string,
    description: string,
  })).isRequired,
};

export default OpenSource;
