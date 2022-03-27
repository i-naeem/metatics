import { Text, Title, Grid, createStyles, Image } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import React from 'react';

const useStyles = createStyles((theme) => ({
  col: {
    border: '1px solid black',
    marginBottom: theme.spacing.sm,
    borderRadius: theme.radius.sm,
  },
}));

const Content = ({ information = [] }) => {
  const { classes } = useStyles();
  return (
    <section>
      <Grid p="sm" align="flex-start">
        <Grid.Col span={2} style={{ backgroundColor: 'red' }}>
          <Image
            src="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg"
            alt="Sample"
            fit
          />
        </Grid.Col>
        <Grid.Col span={10}>
          <Text my="md" lineClamp={4}>
            <Title>Meta information of your file</Title>
            <p>
              The data below is all the metadata we could automatically extract
              from your file. It may be neither complete nor adequate. <br />{' '}
              Metadata could have been changed or deleted in the past. Please be
              aware that the metadata is provided without liability.
            </p>
          </Text>
        </Grid.Col>
      </Grid>
      <Grid p="sm" gutter="sm">
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
              span={6}
              sm={6}
              md={4}
              lg={2}
            >
              {info.key}
            </Grid.Col>
            <Grid.Col
              className={classes.col}
              px="md"
              style={{
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                wordWrap: 'break-word',
              }}
              span={6}
              sm={6}
              md={8}
              lg={10}
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
