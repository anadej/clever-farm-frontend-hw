import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Grid from "@mui/material/Grid";
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import weekDays from "../../data/weekDays.json";

function ModalEvent (props) {
  const {currentEvent, open, onClose} = props;

  const [event, setEvent] = useState(currentEvent);
  
  const handleChange = ({ target }) => {
    const { name, value, type } = target; 
    if (type === "radio") {
    setEvent({...event, [name]: parseInt(value) });
    return;
    }
    setEvent({...event, [name]: value });
  };

  const handleSubmitCancel = () => {
    onClose(); 
  };
  
  const handleSubmitSave = evt => {
    // evt.preventDefault();
    onClose(event); 
  };

  const handleSubmitDelete = evt => {
    // evt.preventDefault();
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
                <FormControl component="fieldset">
                  <FormLabel component="legend">Den spuštění:</FormLabel>
                  <RadioGroup
                    aria-label="gender"
                    defaultValue=""
                    row
                  >
                    {weekDays.map(option => (
                      <FormControlLabel key={option.value} value={option.num}
                      control={
                        <Radio
                          onChange={(e)=>handleChange(e)}
                          checked={event.weekDay===option.num}
                          name="weekDay"
                        />} 
                        label={option.label} 
                        labelPlacement="bottom" 
                      />
                    ))}  
                  </RadioGroup>
                </FormControl>
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
          <Button onClick={handleSubmitSave}>{event.id ? "EDIT" : "ADD"}</Button>
          {event.title && <Button onClick={handleSubmitDelete}>DELETE</Button>}
          <Button onClick={handleSubmitCancel}>CANCEL</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ModalEvent;