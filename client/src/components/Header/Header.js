import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {logout} from '../../store/signinSlice'
import { grey } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    color: 'white',

  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch()
  const history = useHistory()

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    console.log(localStorage);
    setAnchorEl(event.currentTarget);
  };

  useEffect(()=>{
    console.log(localStorage.auth);
    if(localStorage.auth) setAuth(true)
    else setAuth(false)
  },[localStorage.auth])

  const handleCloseLogout = () => {
    dispatch(logout())
    localStorage.clear()
    setAnchorEl(null);
    window.location.replace('http://localhost:3000/')
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <div  className={classes.root} id="header">
      <AppBar style={{backgroundColor: 'rgb(86, 139, 255)'}} position="static">
        <Toolbar>
          <IconButton onClick={handleMenu} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.title} to='/'>
            Главная 
            </Link>
          </Typography>
          {localStorage.auth ? (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><Link to="/lk"  color="inherit">Профиль</Link></MenuItem>
                <MenuItem onClick={handleCloseLogout}>Выход</MenuItem>              
              </Menu>
            </div>
          ) : 
          <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <Link className={classes.title} to='/signin'>
                <AccountCircle />
                </Link>
              </IconButton>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}
