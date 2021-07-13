import React from 'react';
import { Container, Grid, Typography, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const setStyles = makeStyles((theme) => ({
    post: {
        position: 'relative',
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),

        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    },
    postContent: {
        position: 'relative',
        padding: theme.spacing(10)
    },
    overlay: {
        position: 'absolute', 
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundOverlay: 'rgba(0,0,0,.3)'
    }
}))
// md={n} placed n columns
// gutterBottom - component will have bottom offset.
export default function TopImage() {
    const imageStyles = setStyles()
    return (
        <Paper 
            className={imageStyles.post}
            style={{ backgroundImage: 'url(http://www.gannett-cdn.com/presto/2019/08/30/PCIN/f1fea901-4c29-4a8f-b6bb-86e40605929b-20190830_Ducks0089.jpg)' }}>

            <Container fixed>
                <Grid container>
        
                    <Grid item md={6}>
                        <div className={imageStyles.postContent}>

                            <Typography 
                                component='h1'
                                variant='h3'
                                color='inherit'
                                gutterBottom> 
                                Мастер бронирования переговорных
                            </Typography>

                            <Typography
                                component='h5'
                                color='inherit'
                                paragraph>
                                Lorem Ipsum dolor sit amet comsectetur,
                                adipiscing elit. 
                            </Typography>

                            <Button
                                variant='contained'
                                color='secondary'>
                                Забронировать
                            </Button>

                        </div>
                    </Grid>

                </Grid>
            </Container>
            
        </Paper>
    )
}
