import React from 'react';
import IsEqual from 'react-fast-compare';
import { ZoomIn } from '@components/index';
import { Container, TestBox } from './styles';

function Home(): JSX.Element {
  return (
    <Container>
      <ZoomIn>
        <TestBox />
      </ZoomIn>
      <ZoomIn>
        <TestBox />
      </ZoomIn>
      <ZoomIn>
        <TestBox />
      </ZoomIn>
      <ZoomIn>
        <TestBox />
      </ZoomIn>
      <ZoomIn>
        <TestBox />
      </ZoomIn>
      <ZoomIn>
        <TestBox />
      </ZoomIn>
      <ZoomIn>
        <TestBox />
      </ZoomIn>
      <ZoomIn>
        <TestBox />
      </ZoomIn>
      <ZoomIn>
        <TestBox />
      </ZoomIn>
    </Container>
  );
}

export default React.memo(Home, IsEqual);
