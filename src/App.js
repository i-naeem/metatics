import { AppShell } from '@mantine/core';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <AppShell
      padding="sm"
      header={<Header />}
      styles={(theme) => ({
        main: {
          height: 'calc(100vh - 60px)',
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Home />
    </AppShell>
  );
}

export default App;
