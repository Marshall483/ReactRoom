import React from 'react';
import Button from '@material-ui/core/Button';
import { Card, Grid, CardMedia, CardContent, CardActions, Container, Typography} from '@material-ui/core';
import LayerIcon from '@material-ui/icons/Layers';
import { makeStyles } from '@material-ui/core/styles';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

const setStyles = makeStyles((theme) => ({
    CardContent: {
        flexGrow: 1
    },
    cardMedia: {
        paddingTop: '56.25%'
    },
    cardGrid: {
        marginTop: theme.spacing(4)
    },
    card: {
        margin: theme.spacing(1)
    }
}))

const cards = [1,2,3,4,5,6,7,8,9];

export default function Body() {
    const gridStyles = setStyles()
    return (
        <Container className={gridStyles.cardGrid} maxWidth='md'>
            <Grid container spacing={4}>

                {cards.map((card) => (
                    <Grid item key={card} xs={12} sm={6} md={4}>

                        <Card className={gridStyles.card}>

                            <CardMedia 
                                className={gridStyles.cardMedia}
                                title='sexyImage'
                                image='https://www.gannett-cdn.com/presto/2019/08/30/PCIN/f1fea901-4c29-4a8f-b6bb-86e40605929b-20190830_Ducks0089.jpg'/>

                            <CardContent className={gridStyles.cardContent}>
                                <Typography variant='h5' gutterBottom >Название команты</Typography>
                                <Typography>Описание команты</Typography>
                            </CardContent>

                            <CardActions>

                                <Button size='small' color='primary'>Подробнее</Button>

                                <LayerIcon />
                                <PlayCircleFilledIcon />

                            </CardActions>

                        </Card>

                    </Grid>
                ))}

            </Grid>
        </Container>
    )
}
