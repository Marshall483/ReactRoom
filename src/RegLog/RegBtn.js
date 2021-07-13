import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import { DialogContent, DialogTitle } from '@material-ui/core';

export default function RegisterButton() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => { setOpen(true); }
    const handleClose = () => { setOpen(false); }

    return (
        <div>
            <Button color='primary' variant='outlined' onClick={handleClickOpen}>Войти</Button>

            <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                <DialogTitle id='form-dialog-title'>Войти</DialogTitle> 

                <DialogContent>

                    <DialogContentText>Войдите, чтобы забронировать комнату.</DialogContentText>

                    <TextField antoFocus margin="dense" id='name' label='Email Adress' type='email' fullWidth></TextField>
                    <TextField antoFocus margin="dense" id='pass' label='Password' type='password' fullWidth></TextField>

                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color='primary'>Отмена</Button>
                    <Button onClick={handleClose} color='primary'>Войти</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
