import React from 'react';
import IsEqual from 'react-fast-compare';
import { FadeInRight } from '@components/index';
import { Container, TestBox } from './styles';

function Home(): JSX.Element {
  return (
    <Container>
      <FadeInRight>
        <TestBox />
      </FadeInRight>
      <FadeInRight>
        <TestBox />
      </FadeInRight>
      <FadeInRight>
        <TestBox />
      </FadeInRight>
      <FadeInRight>
        <TestBox />
      </FadeInRight>
      <FadeInRight>
        <TestBox />
      </FadeInRight>
      <FadeInRight>
        <TestBox />
      </FadeInRight>
      <FadeInRight>
        <TestBox />
      </FadeInRight>
      <FadeInRight>
        <TestBox />
      </FadeInRight>
      <FadeInRight>
        <TestBox />
      </FadeInRight>
    </Container>
  );
}

export default React.memo(Home, IsEqual);
