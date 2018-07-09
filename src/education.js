import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { Grid, Label, Segment, Container } from 'semantic-ui-react'
import CardTag from './card-tag';

const Education = ({ data }) => (
  <Container>
    <Segment raised>
      <CardTag as='span' color='teal' ribbon>
        Education
      </CardTag>
      <Grid stackable columns={1}>
      {data.map(m => (
        <Grid.Column key={m.degree}>
          <Label
            as='a'
            color='gray'
            tag
            onClick={() => window.location.href = m.link}
          >
            {m.degree}
            <Label.Detail>{m.college}</Label.Detail>
          </Label>
        </Grid.Column>
      ))}
      </Grid>
    </Segment>
  </Container>
);

Education.propTypes = {
  data: arrayOf(shape({
    degree: string,
    college: string,
    link: string,
  })).isRequired,
};

export default Education;
