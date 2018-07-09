import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { Grid, Label, Segment, Container } from 'semantic-ui-react'
import CardTag from './card-tag';

const OpenSource = ({ data }) => (
  <Container>
    <Segment raised>
      <CardTag as='span' color='teal' ribbon>
        Open Source Projects
      </CardTag>
      <Grid stackable columns={2}>
      {data.map(m => (
        <Grid.Column key={m.name}>
          <Segment raised>
            <Label as='a' color='green' tag onClick={() => window.location.href = m.link}>
              {m.name}
            </Label>
            <span>{m.description}</span>
          </Segment>
        </Grid.Column>
      ))}
      </Grid>
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
