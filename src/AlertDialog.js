import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog(props) {

    const parent = props; 

  return (
    <div>
      <Dialog
        open={parent.open}
        onClose={parent.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete current roster?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action is final. There is no way back from here. 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color={"alert"} onClick={parent.handleClose}>Cancel</Button>
          <Button variant="outlined" onClick={parent.handleAccept} autoFocus> 
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
