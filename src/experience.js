import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { Grid, Label, Segment, Container } from 'semantic-ui-react'
import CardTag from './card-tag';

const Experience = ({ data }) => (
  <Container>
    <Segment raised>
      <CardTag as='span' color='teal' ribbon>
        Experience
      </CardTag>
      <Grid stackable columns={1}>
      {data.map(m => (
        <Grid.Column key={m.employer}>
          <Segment raised>
            <Label as='span' color='brown' tag>
              {m.title}
              <Label.Detail>{m.employer} {m.period}</Label.Detail>
            </Label>
            <Container>
              <p>{m.description}</p>
            </Container>
          </Segment>
        </Grid.Column>
      ))}
      </Grid>
    </Segment>
  </Container>
);

Experience.propTypes = {
  data: arrayOf(shape({
    title: string,
    employer: string,
    period: string,
    description: string,
  })).isRequired,
};

export default Experience;
