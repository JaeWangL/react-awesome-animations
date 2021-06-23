import React from 'react';
import IsEqual from 'react-fast-compare';
import { FlipIn } from '@components/index';
import { Container, TestBox } from './styles';

function Home(): JSX.Element {
  return (
    <Container>
      <FlipIn>
        <TestBox />
      </FlipIn>
      <FlipIn>
        <TestBox />
      </FlipIn>
      <FlipIn>
        <TestBox />
      </FlipIn>
      <FlipIn>
        <TestBox />
      </FlipIn>
      <FlipIn>
        <TestBox />
      </FlipIn>
      <FlipIn>
        <TestBox />
      </FlipIn>
      <FlipIn>
        <TestBox />
      </FlipIn>
      <FlipIn>
        <TestBox />
      </FlipIn>
      <FlipIn>
        <TestBox />
      </FlipIn>
      <FlipIn>
        <TestBox />
      </FlipIn>
      <FlipIn>
        <TestBox />
      </FlipIn>
    </Container>
  );
}

export default React.memo(Home, IsEqual);
