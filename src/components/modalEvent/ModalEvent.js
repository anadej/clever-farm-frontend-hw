import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
// import Avatar from '@mui/material/Avatar';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Grid from "@mui/material/Grid";
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const weekDays = [
  {
    value: "Mondey",
    label: "PO",
  },
  {
    value: "Tuesday",
    label: "ÚT",
  },
  {
    value: "Wednesday",
    label: "ST",
  },
  {
    value: "Thurthday",
    label: "ČT",
  },
  {
    value: "Friday",
    label: "PÁ",
  },
  {
    value: "Saturday",
    label: "SO",
  },
  {
    value: "Sunday",
    label: "NE",
  },
];

function ModalEvent (props) {
  const {currentEvent, open, onClose} = props;

  const [event, setEvent] = useState(currentEvent);
  
  const handleChange = ({ target }) => {
    const { name, value } = target; 
    setEvent({...event, [name]: value });   
  };
  
  const handleSubmitCancel = () => {
    onClose(); 
  };
  
  const handleSubmitSave = evt => {
    evt.preventDefault();
    console.log(`event`, event);
    onClose(event); 
  };

  const handleSubmitDelete = evt => {
    evt.preventDefault();
    onClose(event.id); 
  };

  return (
    <div>
      <Dialog open={open} onClose={onClose} onSubmit={handleSubmitCancel}>     
        <DialogContent>
          <Grid
            container
            spacing={3}
          >
              <Grid item xs={12}>
                <FormLabel component="legend">Název závlahy:</FormLabel>
                <TextField
                  autoFocus
                  variant="standard"
                  name="title"
                  value={event.title}
                  onChange={handleChange}
                /> 
              </Grid>
              <Grid item xs={12}>
                <FormLabel component="legend">Den spuštění:</FormLabel>
                <FormGroup row>
                  {weekDays.map(option => (
                    <FormControlLabel key={option.value} control={<Checkbox 
                        onChange={handleChange}
                        checked={event.days===option.value}
                        value={option.value}
                        name="days"
                        inputProps={{ 'aria-label': 'controlled' }}
                      />} 
                      label={option.label}
                      labelPlacement="bottom"
                    />
                  ))}
                </FormGroup>
              </Grid>
              <Grid item xs={12}>
                <FormLabel component="legend">Začátek spuštění:</FormLabel>
                <TextField
                  variant="standard"
                  name="startTime"
                  value={event.startTime}
                  onChange={handleChange}
                />
              </Grid>
          </Grid>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmitSave}>{event.title ? "EDIT" : "ADD"}</Button>
          {event.title && <Button onClick={handleSubmitDelete}>DELETE</Button>}
          <Button onClick={handleSubmitCancel}>CANCEL</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ModalEvent;