import React, { Component } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

export default class ModalEvent extends Component {
  render() {
    console.log(`this.props`, this.props);
    return (
      <div>
        <Dialog open={this.props.open} onClose={this.props.onClose}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Víkendové zavlažování"
            type="h2"
            fullWidth
            variant="standard"
            />
              <div>{this.props.currentEvent.title}</div>
              {/* <div>{this.props.currentEvent.start}</div> */}
              {/* <div>{this.props.currentEvent.end}</div> */}
              <div>{this.props.currentEvent.day}</div>
              <div>{this.props.currentEvent.time}</div>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.onClose}>ZRUŠIT</Button>
          <Button onClick={this.props.onClose}>VYTVOŘIT</Button>
        </DialogActions>
        </Dialog>
      </div>
    );
  }
}