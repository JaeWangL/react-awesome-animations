import React from 'react';
import IsEqual from 'react-fast-compare';
import { FlowText } from '@components/index';
import { Container, TestBox } from './styles';

function Home(): JSX.Element {
  return (
    <Container>
      <FlowText text="Test asdasdasdasdasdasdasdas" />
    </Container>
  );
}

export default React.memo(Home, IsEqual);
