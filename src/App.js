import {
  AppShell,
  Center,
  Text,
  TypographyStylesProvider,
} from '@mantine/core';
import FileDropzone from './components/FileDropzone';
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
      <Center>
        <Text lineClamp={3} align="center">
          <TypographyStylesProvider>
            <h1>Welcome to Metatics.</h1>
            <p>Find the hidden information of pictures.</p>
          </TypographyStylesProvider>
        </Text>
      </Center>
      <Center>
        <div
          style={{
            maxWidth: 1000,
            flexGrow: 1,
          }}
        >
          <FileDropzone />
        </div>
      </Center>
    </AppShell>
  );
}

export default App;
