import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddRoute from './AddRoute';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function AddRoute() {
  const classes = useStyles();
  return (
    <AddRoute/>
  );
  }
