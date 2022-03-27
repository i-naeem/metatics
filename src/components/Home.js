import { Center, Text, TypographyStylesProvider } from '@mantine/core';
import FileDropzone from './FileDropzone';

const Home = (props) => {
  return (
    <section>
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
    </section>
  );
};

export default Home;
