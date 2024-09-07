import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';

const CancellationPopup = ({ open, handleClose, title, question, option1, option2, onOption1Click, onOption2Click }) => {
 console.log('handleCloseopen', handleClose, title, question, option1, option2, onOption1Click, onOption2Click)
    return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className='common-popup'
    >
      <DialogTitle id="alert-dialog-title">
        <Typography variant='h6'>{title}</Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Typography variant='body1'>{question}</Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button className='primary-btn-outline' onClick={onOption1Click}>{option1}</Button>
        <Button className='primary-btn' onClick={onOption2Click} autoFocus>
          {option2}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CancellationPopup;
