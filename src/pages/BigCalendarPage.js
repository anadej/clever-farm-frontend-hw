import React, { useState } from 'react';
import BigCalendarPageStyled from "./BigCalendarPageStyled";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import { Typography } from '@mui/material';
import moment from 'moment';
import 'moment/locale/cs'  
//provide changes in this file (line 105) 
//uppercase first letter of Days name 

import "react-big-calendar/lib/css/react-big-calendar.css";
import ModalEvent from "../components/modalEvent/ModalEvent";


const events = [
  {
    id: 1,
    title: "First Event",
    start: new Date(2021, 10, 23, 18, 30, 0),
    end: new Date(2021, 10, 23, 19, 30, 0),
    day: "Út",
    time: 5  

  },
  {
    id: 2,
    title: "Second Event",
    start: new Date(2021, 10, 25, 11, 0, 0),
    end: new Date(2021, 10, 25, 12, 0, 0),
    day: "Čt",
    time: 5  
  },
  {
    id: 3,
    title: "Third Event",
    start: new Date(2021, 10, 26, 15, 30, 0),
    end: new Date(2021, 10, 26, 16, 0, 0),
    day: "Pa",
    time: 5
  },
  {
    id: 4,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() + 1)),
    end: new Date(new Date().setHours(new Date().getHours() + 2)),
    day: "Po",
    time: 5
  },
  {
    id: 5,
    title: 'Point in Time Event',
    start: new Date(2021, 10, 21, 15, 30, 0),
    end: new Date(2021, 10, 21, 16, 0, 0),
    day: "Ne",
    time: 5
  },
]
const localizer = momentLocalizer(moment);
let formats = {
  dayFormat: (date, culture, localizer) =>
    localizer.format(date, 'dddd', culture),
}

const initEvent = {title: "", start: "", end: "", day: "", time: 0}

function BigCalendarPage() {
  // const [newEvent, setNewEvent] = useState(initEvent);
  const [currentEvent, setCurrentEvent] = useState(initEvent);
  const [allEvents, setAllEvents] = useState(events);
  const [showModal, setShowModal] = useState(false);

  // function handleAddEvent(){
  //   setAllEvents([...allEvents, newEvent]);
  // }

  // function handleSelect ({ start, end }){
  //   const title = window.prompt('New Event name')
  //   if (title){
  //     setAllEvents([...allEvents, {title, start, end}]);  
  //   }
  // }

  function handleCloseModal() {
    setShowModal(false);
    setCurrentEvent(initEvent);
  }

  function createNewEvent({ start, end }) {
    console.log(`currentEventNEW111`, currentEvent);
    setCurrentEvent({start, end});
    console.log(`currentEventNEW222`, currentEvent);
    setShowModal(true);
  }

  function handleEventSelection (event){
    setCurrentEvent(event);
    console.log(`currentEventEDIT`, currentEvent);
    setShowModal(true);
    console.log(`showModal`, showModal);

  }

  return (
    <BigCalendarPageStyled>
      <Typography variant="h2">Big Calendar Test</Typography>

      <Calendar 
        localizer={localizer} 
        events={allEvents}
        startAccessor="start" 
        endAccessor="end" 
        selectable={true}
        resizable={true}
        scrollToTime={new Date(1970, 1, 1, 8)}
        toolbar={false} 
        formats={formats}
        defaultView={Views.WEEK}
        style={{height:"70vh", margin: "50px"}} 
        // onSelectEvent={event => alert(event.title)}
        // onSelectSlot={handleSelect}
        onSelectEvent={handleEventSelection}
        onSelectSlot={createNewEvent}        
      />
      {showModal && 
        <ModalEvent
          currentEvent={currentEvent}
          open={showModal}
          onClose={handleCloseModal}
        />
      }
      
    </BigCalendarPageStyled>
  );
}

export default BigCalendarPage;
