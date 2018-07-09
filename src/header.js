import React from 'react';
import { Header, Segment, Responsive } from 'semantic-ui-react';
import styled from 'styled-components';
import headerData from './data/header.json';

const NameElement = styled(Header)`
  font-weight: bold !important;
  color: black !important;
`;

export default () => (
  <Segment.Group>
    <Responsive
      maxWidth={Responsive.onlyTablet.minWidth}
      as={() => (
        <Segment clearing textAlign="center" color="teal">
          <Header as="h2">
            <NameElement sub as="span">{headerData.name}</NameElement>
            <Header sub as="span">{headerData.tagLine}</Header>
            <Header sub as="span">{headerData.email}</Header>
            <Header sub as="span">{headerData.phone}</Header>
          </Header>
        </Segment>
      )}
    />
    <Responsive
      minWidth={Responsive.onlyTablet.minWidth + 1}
      as={() => (
        <Segment clearing color="teal">
          <Header as='h2' floated="right">
            <Header sub as="span">{headerData.email}</Header>
            <Header sub as="span">{headerData.phone}</Header>
          </Header>
          <Header as='h2' floated="left">
            <NameElement sub as="span">{headerData.name}</NameElement>
            <Header sub as="span">{headerData.tagLine}</Header>
          </Header>
        </Segment>
      )}
    />
  </Segment.Group>
)