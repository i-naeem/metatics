import { Container, Header as MantineHeader, Text, Title } from '@mantine/core';
const Header = (props) => {
  return (
    <MantineHeader height={60} p="xs">
      <Container
        sx={(theme) => ({
          height: '100%',
          display: 'flex',
          alignItems: 'center',
        })}
      >
        <Text
          variant="gradient"
          gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
          weight={700}
          style={{ fontFamily: 'Greycliff CF, sans-serif' }}
          component="a"
          href="#!"
        >
          <Title>Metatics</Title>
        </Text>
      </Container>
    </MantineHeader>
  );
};

export default Header;
