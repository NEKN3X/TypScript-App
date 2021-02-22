import Head from 'next/head';
import React, { memo } from 'react';
import { Container, Header } from 'semantic-ui-react';

import { css } from '@emotion/react';

import AboutPage from './about';

export default memo(() => {
  return (
    <div>
      <Head>
        <title>Next App</title>
      </Head>
      <Container
        css={css`
          padding-top: 20px;
          min-height: 100vh;
        `}
      >
        <Header as="h1">Next App</Header>
        <AboutPage />
      </Container>
    </div>
  );
});
