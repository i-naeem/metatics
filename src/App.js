import { AppShell } from '@mantine/core';
import Header from './components/Header';

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
      <h1>Hi, Mom</h1>
    </AppShell>
  );
}

export default App;
