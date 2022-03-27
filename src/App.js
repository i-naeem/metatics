import Content from './components/Content';
import { AppShell } from '@mantine/core';
import Header from './components/Header';
import Home from './components/Home';
import React, { useState } from 'react';
import useParse from './hooks/useParse';

function App() {
  const [file, setFile] = useState(null);
  const { loading, error, info, previewUrl } = useParse(file);

  if (error) {
    console.log(error);
  }
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
      {error && <h1>Failed to parse the file</h1>}
      <Home loading={loading} onDrop={(file) => setFile(file)} />
      {info && <Content information={info} img={previewUrl} />}
    </AppShell>
  );
}

export default App;
