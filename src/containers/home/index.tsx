import React from 'react';
import IsEqual from 'react-fast-compare';
import { FadeIn } from '@components/index';
import { Container, TestBox } from './styles';

function Home(): JSX.Element {
  return (
    <Container>
      <FadeIn>
        <TestBox />
      </FadeIn>
      <FadeIn>
        <TestBox />
      </FadeIn>
      <FadeIn>
        <TestBox />
      </FadeIn>
      <FadeIn>
        <TestBox />
      </FadeIn>
      <FadeIn>
        <TestBox />
      </FadeIn>
      <FadeIn>
        <TestBox />
      </FadeIn>
      <FadeIn>
        <TestBox />
      </FadeIn>
      <FadeIn>
        <TestBox />
      </FadeIn>
      <FadeIn>
        <TestBox />
      </FadeIn>
      <FadeIn>
        <TestBox />
      </FadeIn>
      <FadeIn>
        <TestBox />
      </FadeIn>
      <FadeIn>
        <TestBox />
      </FadeIn>
    </Container>
  );
}

export default React.memo(Home, IsEqual);
