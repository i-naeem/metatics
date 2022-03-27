import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { MantineProvider } from '@mantine/core';

ReactDOM.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
