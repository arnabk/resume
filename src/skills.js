import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { Segment, Container, Icon } from 'semantic-ui-react'
import CardTag, { MarginedLabel } from './card-tag';

const Skills = ({ data }) => (
  <Container>
    <Segment raised>
      <CardTag as='span' color='teal' ribbon>
        Skills
      </CardTag>
      {data.map(m => (
        <MarginedLabel
          key={m.name}
          as='a'
          color={m.color}
          content={m.name}
          icon={<Icon className={m.icon} />}
          onClick={() => window.location.href = m.link}
        />
      ))}
    </Segment>
  </Container>
);

Skills.propTypes = {
  data: arrayOf(shape({
    name: string,
    color: string,
    icon: string,
  })).isRequired,
};

export default Skills;
