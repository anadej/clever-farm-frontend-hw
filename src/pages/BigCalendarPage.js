import React, { useState } from 'react';
import BigCalendarPageStyled from "./BigCalendarPageStyled";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from 'moment';
import 'moment/locale/cs'  
//provide changes in this file (line 105) 
//uppercase first letter of Days name 
import { useMediaQuery } from 'react-responsive'
import "react-big-calendar/lib/css/react-big-calendar.css";
import ModalEvent from "../components/modalEvent/ModalEvent";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

let EVENTS = [
  {
    id: 1,
    title: "First Event",
    start: new Date(2021, 10, 29, 15, 30, 0),
    end: new Date(2021, 10, 29, 15, 35, 0),
    day: ["Mondey"],
    startTime: "15:30",
  },
  {
    id: 2,
    title: "Second Event",
    start: new Date(2021, 10, 30, 11, 0, 0),
    end: new Date(2021, 10, 30, 12, 0, 0),
    day: ["Tuesday"],
    startTime: "11:00",
  },
  {
    id: 3,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() + 1)),
    end: new Date(new Date().setHours(new Date().getHours() + 2)),
    day: ["Tuesday"],
    startTime: "11:00",    
  },
]
const localizer = momentLocalizer(moment);
let formats = {
  dayFormat: (date, culture, localizer) =>
    localizer.format(date, 'dddd', culture),
}

const initEvent = {
  title: "",
  start: "",
  end: "",
  day: "",
  startTime: ""}

function BigCalendarPage() {
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  const [open, setOpen] = useState(false);
  
  const [allEvents, setAllEvents] = useState(EVENTS);
  const [currentEvent, setCurrentEvent] = useState(initEvent);
 
  const handleOpenModal = ({id="", title="", start, end, day=[], startTime}) => {
    if (startTime===undefined) startTime = start.toTimeString().substr(0, 5);
    setCurrentEvent({id, title, start, end, day, startTime});
    setOpen(true);
  }
  
  const handleCloseModal = (value) => {
    setOpen(false);
    
    if (value === undefined) return;  
    
    if (value.id==='') {          
      setAllEvents([...allEvents, {...value, id: allEvents[allEvents.length-1].id + 1 }]);
      return;
    }
    
    const updatedEvents = allEvents.map(item => 
    {
      if (item.id === value.id){
        return value; //gets everything that was already in item, and updates "done"
      }
      return item; // else return unmodified item 
    });
    setAllEvents(updatedEvents);
    
  }

    return (
    <BigCalendarPageStyled>

      {isTabletOrDesktop && <Calendar 
          localizer={localizer} 
          events={allEvents}
          startAccessor="start" 
          endAccessor="end" 
          selectable={true}
          scrollToTime={new Date(1970, 1, 1, 8)}
          toolbar={false} 
          
          formats={formats}
          defaultView={Views.WEEK}
          style={{height:"80vh", margin: "30px"}} 
          onSelectEvent={handleOpenModal}
          onSelectSlot={handleOpenModal}        
        />}
      {isMobile && <Calendar 
          localizer={localizer} 
          events={allEvents}
          startAccessor="start" 
          endAccessor="end" 
          selectable={true}
          scrollToTime={new Date(1970, 1, 1, 8)}
          toolbar={false} 
          formats={formats}
          defaultView={Views.DAY}
          style={{height:"80vh", margin: "30px"}} 
          onSelectEvent={handleOpenModal}
          onSelectSlot={handleOpenModal}        
        />}
      {open && 
        <ModalEvent
          currentEvent={currentEvent}
          open={open}
          onClose={handleCloseModal}
        />
      }
    </BigCalendarPageStyled>
  );
}

export default BigCalendarPage;



  // function handleAddEvent(){
  //   setAllEvents([...allEvents, newEvent]);
  // }

  // function handleSelect ({ start, end }){
  //   const title = window.prompt('New Event name')
  //   if (title){
  //     setAllEvents([...allEvents, {title, start, end}]);  
  //   }
  // }


  // const handleChangeCheckbox = ({ target }) => {
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const name = target.name;    
  //   console.log(`target`, target);
  //   console.log(`value`, value);
  //   console.log(`name`, name);
  //   // setEvent({...event, [name]: value });   
  // };