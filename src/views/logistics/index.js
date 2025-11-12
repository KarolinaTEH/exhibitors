import React from 'react';
import { Card, Box, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Timeline, Support, Markdown } from '../../components';
import { useSettings } from '../../contexts';
import { Title, useTranslate } from 'react-admin';
import LogisticsIcon from '@material-ui/icons/Assignment';

const useStyles = makeStyles((theme) => ({
  videoContainer: {
    position: 'relative',
    width: '100%',
    paddingTop: '56.25%', // 16:9 aspect ratio
    marginBottom: theme.spacing(2),
  },
  iframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: theme.shape.borderRadius,
  },
  sectionBox: {
    marginTop: theme.spacing(0),
    padding: theme.spacing(2),
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
  },
}));

const InfoBox = () => (
  <Support />
);

const Logistics = () => {
  const classes = useStyles();
  const { items } = useSettings('logistics.timeline');
  const translate = useTranslate();

  return (
    <Card>
      <Title title="resources.logistics.menu" />
      <InfoBox />
      <Box className={classes.sectionBox}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={9}>
            {/* <Box className={classes.videoContainer}>
              <iframe
                src="https://www.youtube.com/embed/qs3Kbnd-jrw"
                title={translate('timeline.introvideo.title')}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={classes.iframe}
              ></iframe>
            </Box> */}
            <Box className={classes.videoContainer}>
              <img
                src="https://res.cloudinary.com/eventjuicer/image/upload/v1757581060/ExpoSuccessPath_dmjeil.png"
                alt={translate('timeline.introvideo.title')}
                className={classes.iframe} 
              />
            </Box>

          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" component="h2" gutterBottom>
              {translate('timeline.introvideo.title')}
            </Typography>
            <Markdown label="timeline.introvideo.description" />
          </Grid>
        </Grid>
      </Box>
      <Box mt={3}>
        <Timeline baseLabel="logistics.timeline." items={items} />
      </Box>
    </Card>
  );
};

export { LogisticsIcon };
export default Logistics;
