// import logo from './logo.svg';
import React from 'react';
import Button from '@material-ui/core/Button';
import { AppBar, Container, Toolbar, IconButton, Typography, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
// import ClassComp from './ClassComp.js';

const useStyles = makeStyles((theme) => ({
  root:{
    flexGrow: 1
  },
  menuButton:{
    marginRight: theme.spacing(1) // 1 == 8px
  },
  title: {
    flexGrow: 1
  }
}))

function App() {

  const classes = useStyles();

  return (
    <AppBar position='fixed'>
      <Container fixed>

        <Toolbar >

          <IconButton edge='start' className={classes.menuButton}>
            <MenuIcon />
          </IconButton>

          <Typography variant='h7' className={classes.title}>Мастер бронирования переговорных</Typography>

          <Box mr={3}>
            <Button color='black' variant='outlined'>Войти</Button>
          </Box>

          <Button color='secondary' variant='contained'>Регистрация</Button>

        </Toolbar>
        
      </Container>
    </AppBar>
  );
}

export default App;
