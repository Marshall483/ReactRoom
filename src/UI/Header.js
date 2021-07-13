import React from 'react';
import Button from '@material-ui/core/Button';
import { AppBar, Container, Toolbar, IconButton, Typography, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const setStyles = makeStyles((theme) => ({
    menuButton:{
      marginRight: theme.spacing(1) // 1 == 8px
    },
    title: {
      flexGrow: 1
    }
  }))

export default function Header() {
    const headerStyles = setStyles()
    return (
        <AppBar position='fixed' style={{ backgroundColor: '#212121'}} >
          <Container fixed>

            <Toolbar >

            <IconButton edge='start' className={headerStyles.menuButton}>
                <MenuIcon />
            </IconButton>

            <Typography variant='h7' className={headerStyles.title}>Имя пользователя</Typography>

            <Box mr={3}>
                <Button color='black' variant='outlined'>Войти</Button>
            </Box>

            <Button color='secondary' variant='contained'>Регистрация</Button>

            </Toolbar>

          </Container>      
        </AppBar>
    )
}
