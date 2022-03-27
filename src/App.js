import Content from './components/Content';
import { AppShell } from '@mantine/core';
import Header from './components/Header';
import Home from './components/Home';
import React from 'react';

function App() {
  return (
    <AppShell
      padding="sm"
      header={<Header />}
      styles={(theme) => ({
        main: {
          minHeight: 'calc(100vh - 60px)',
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Home />
      {false && <Content />}
    </AppShell>
  );
}

export default App;
