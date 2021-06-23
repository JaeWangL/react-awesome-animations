import React from 'react';
import IsEqual from 'react-fast-compare';
import { FadeInUp } from '@components/index';
import { Container, TestBox } from './styles';

function Home(): JSX.Element {
  return (
    <Container>
      <FadeInUp>
        <TestBox />
      </FadeInUp>
      <FadeInUp>
        <TestBox />
      </FadeInUp>
      <FadeInUp>
        <TestBox />
      </FadeInUp>
      <FadeInUp>
        <TestBox />
      </FadeInUp>
      <FadeInUp>
        <TestBox />
      </FadeInUp>
      <FadeInUp>
        <TestBox />
      </FadeInUp>
      <FadeInUp>
        <TestBox />
      </FadeInUp>
      <FadeInUp>
        <TestBox />
      </FadeInUp>
      <FadeInUp>
        <TestBox />
      </FadeInUp>
      <FadeInUp>
        <TestBox />
      </FadeInUp>
      <FadeInUp>
        <TestBox />
      </FadeInUp>
    </Container>
  );
}

export default React.memo(Home, IsEqual);
