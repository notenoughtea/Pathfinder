import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-scroll';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Timelapse from '../video/timelapse.mp4';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import FindPath from '../OneCard/FindPath/FindPath';

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
        <Link to="mapContainer" style={{cursor: 'pointer'}} smooth={true} duration={100}><FindPath/></Link>
        {/* <Grid container justifyContent="center">

          {/* <Typography variant="h1" gutterBottom>
            Find your path
          </Typography> */}
          {/* <Tooltip title="down" aria-label="add">
            <Fab color="primary" className={classes.fab}>
              
            </Fab>
           </Tooltip> 
         </Grid> */} 
        </div>
      </div>
    </div>
  )
}

