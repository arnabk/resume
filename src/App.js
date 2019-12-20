import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import Header from './header';
import Experience from './experience';
import OpenSource from './opensource';
import Skill from "./skills";
import Education from './education';
import Social from './socials';
import experienceData from './data/experiences.json';
import openSourceData from './data/opensources.json';
import skillsData from './data/skills.json';
import socialData from './data/socials.json';
import educationData from './data/educations.json';

export default () => (
  <Container fluid={true}>
    <Header />
    <Grid columns={1}>
      <Grid.Column>
        <Experience data={experienceData} />
      </Grid.Column>
      <Grid.Column>
        <OpenSource data={openSourceData} />
      </Grid.Column>
      <Grid.Column>
        <Skill data={skillsData} />
      </Grid.Column>
      <Grid.Column>
        <Education data={educationData} />
      </Grid.Column>
      <Grid.Column>
        <Social data={socialData} />
      </Grid.Column>
    </Grid>
  </Container>
);
