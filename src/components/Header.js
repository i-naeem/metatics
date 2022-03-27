import {
  Container,
  Header as MantineHeader,
  Text,
  Title,
  ActionIcon,
} from '@mantine/core';
import { BrandGithub } from 'tabler-icons-react';
const Header = (props) => {
  return (
    <MantineHeader height={60} p="xs">
      <Container
        sx={(theme) => ({
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
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

        <ActionIcon
          component="a"
          href="https://github.com/i-naeem/metatics"
          variant="none"
          target="_blank"
          color="primary"
          title="Github link to repo"
        >
          <BrandGithub size={28} />
        </ActionIcon>
      </Container>
    </MantineHeader>
  );
};

export default Header;
