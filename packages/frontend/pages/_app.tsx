import 'semantic-ui-css/semantic.min.css';

import { AppProps } from 'next/app';
import React from 'react';

import { ApolloProvider } from '@apollo/client';

import { client } from '../graphql/client';
import { GlobalStyle } from '../styles/GlobalStyle';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      {GlobalStyle}
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
