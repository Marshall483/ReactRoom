import React from 'react';
import { Typography } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { makeStyles } from '@material-ui/core/styles';

const setStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    }
}))

export default function BottomFooter() {
    const footerStyle = setStyles()
    const [value, setValue] = React.useState("recents")

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <footer>
            <Typography variant='h6' align='center' gutterBottom>Footer</Typography>

            <BottomNavigation
                className={footerStyle.root}
                value={value}
                onChange={handleChange}>

                    <BottomNavigationAction label='Recents' value='recents' icon= {<RestoreIcon />}/>
                    <BottomNavigationAction label='Favorites' value='favorites' icon= {<FavoriteIcon />}/>
                    <BottomNavigationAction label='Nearby' value='nearby' icon= {<LocationOnIcon />}/>
                    <BottomNavigationAction label='Folder' value='Folder' icon= {<FolderIcon />}/>

                </BottomNavigation>

                <Typography align='center' color='textSecondary' component='p' variant='subtitle1'>For Irlix company. Powered by students.</Typography>

        </footer>
    )
}
