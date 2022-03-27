import { Text, Title, Grid, createStyles } from '@mantine/core';
import information from '../_mock/information';
import { randomId } from '@mantine/hooks';
import React from 'react';

const useStyles = createStyles((theme) => ({
  col: {
    border: '1px solid black',
    marginBottom: theme.spacing.sm,
    borderRadius: theme.radius.sm,
  },
}));

const Content = (props) => {
  const { classes } = useStyles();
  return (
    <section>
      <Text my="md" lineClamp={4}>
        <Title>Meta information of your file</Title>
        <p>
          The data below is all the metadata we could automatically extract from
          your file. It may be neither complete nor adequate. <br /> Metadata
          could have been changed or deleted in the past. Please be aware that
          the metadata is provided without liability.
        </p>
      </Text>
      <Grid gutter="sm">
        {information.map((info) => (
          <React.Fragment key={randomId()}>
            <Grid.Col
              className={classes.col}
              px="md"
              style={{
                borderRight: 'none',
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              }}
              span={2}
            >
              {info.key}
            </Grid.Col>
            <Grid.Col
              className={classes.col}
              px="md"
              style={{
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              }}
              span={10}
            >
              {info.value}
            </Grid.Col>
          </React.Fragment>
        ))}
      </Grid>
    </section>
  );
};

export default Content;
