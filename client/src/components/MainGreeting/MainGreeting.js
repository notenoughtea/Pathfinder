import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-scroll';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Timelapse from '../video/timelapse.mp4';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

export default function SimpleTooltips() {
  const classes = useStyles();

  return (
    <div className="mainContainer">
      <div className="intro">
        <div className="intro__media">
          <video className="intro_media_video" controled autoPlay loop muted>
            <source src={Timelapse} type="video/mp4" />
          </video>
        </div>
        <div className="intro__content" >
        <Grid container justifyContent="center">
          <Typography variant="h1" gutterBottom style={{textShadow: '2px 8px 6px rgba(0,0,0,0.2), 0px -5px 35px rgba(255,255,255,0.3)'}}>
            Find your path
          </Typography> 
         </Grid>
         <Grid container justifyContent="center">
          <Tooltip title="down" aria-label="add">
            <Fab color="primary" className={classes.fab}>
              <Link to="mapContainer" smooth={true} duration={100}><ArrowDownwardIcon></ArrowDownwardIcon></Link>
            </Fab>
           </Tooltip> 
         </Grid>
        </div>
      </div>
    </div>
  )
}

