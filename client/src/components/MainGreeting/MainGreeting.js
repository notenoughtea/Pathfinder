import React from 'react';
import { useEffect, useState } from "react";
import { server } from '../../constants';
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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

  const [bg, setBg] = useState(null);
  useEffect(() => {
    axios.post('/background')
      .then(res => setBg(res.data));
  }, [])

  return (
    <div>
      {bg && <div style={{
        height: '270px',
        backgroundImage: `url(${server}${bg.url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
        <Grid container justifyContent="center">
          <Typography variant="h2" gutterBottom>
            Find your path
      </Typography>
          <Tooltip title="Add" aria-label="add">
            <Fab color="primary" className={classes.fab}>
              <AddIcon><Link to='/' /></AddIcon>
            </Fab>
          </Tooltip>
        </Grid>
      </div>
      }
    </div>
  );
}
