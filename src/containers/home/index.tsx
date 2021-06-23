import React from 'react';
import IsEqual from 'react-fast-compare';
import { ZoomOut } from '@components/index';
import { Container, TestBox } from './styles';

function Home(): JSX.Element {
  return (
    <Container>
      <ZoomOut>
        <TestBox />
      </ZoomOut>
      <ZoomOut>
        <TestBox />
      </ZoomOut>
      <ZoomOut>
        <TestBox />
      </ZoomOut>
      <ZoomOut>
        <TestBox />
      </ZoomOut>
      <ZoomOut>
        <TestBox />
      </ZoomOut>
      <ZoomOut>
        <TestBox />
      </ZoomOut>
      <ZoomOut>
        <TestBox />
      </ZoomOut>
      <ZoomOut>
        <TestBox />
      </ZoomOut>
      <ZoomOut>
        <TestBox />
      </ZoomOut>
      <ZoomOut>
        <TestBox />
      </ZoomOut>
      <ZoomOut>
        <TestBox />
      </ZoomOut>
    </Container>
  );
}

export default React.memo(Home, IsEqual);
