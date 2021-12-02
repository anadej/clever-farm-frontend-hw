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
// import weekDays from "../data/weekDays.json"

let EVENTS = [
  {
    id: 1,
    title: "First Event",
    start: new Date(2021, 10, 29, 15, 30, 0),
    end: new Date(2021, 10, 29, 15, 35, 0),
    weekDay: 1,
    startTime: "15:30",
  },
  {
    id: 2,
    title: "Second Event",
    start: new Date(2021, 10, 30, 11, 0, 0),
    end: new Date(2021, 10, 30, 12, 0, 0),
    weekDay: 2,
    startTime: "11:00",
  },
  {
    id: 3,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() + 1)),
    end: new Date(new Date().setHours(new Date().getHours() + 2)),
    weekDay: 2,
    startTime: "11:00",    
  },
]

//set Monday as first day of Week
moment.locale('ko', {
  week: {
      dow: 1,
      doy: 1,
  },
});

const localizer = momentLocalizer(moment);

//set formats for Big Calendar
let formats = {
  dayFormat: (date, culture, localizer) => 
    localizer.format(date, 'dddd', culture),
  eventTimeRangeFormat: range =>
    localizer.format(range.start, 'HH:mm'),
}

// const initEvent = {
//   title: "",
//   start: "",
//   end: "",
//   weekDay: 0,
//   startTime: ""}

function BigCalendarPage() {
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  const [open, setOpen] = useState(false);
  
  const [allEvents, setAllEvents] = useState(EVENTS);
  const [currentEvent, setCurrentEvent] = useState({});
 
  const handleOpenModal = ({id="", title="", start, end, weekDay, startTime}) => {
    if (startTime===undefined) startTime = start.toTimeString().substr(0, 5);
    if (weekDay===undefined) weekDay = start.getDay();
    setCurrentEvent({id, title, start, end, weekDay, startTime});
    setOpen(true);
  }
  
  const handleCloseModal = (value) => {
    setOpen(false);
  
    //cancell
    if (value === undefined) return;  
    
    //add new
    if (value.id==='') {          
      setAllEvents([...allEvents, {...value, id: allEvents[allEvents.length-1].id + 1 }]);
      return;
    }

    //delete
    if (typeof value === "number"){
      setAllEvents(allEvents.filter(item => item.id!==value));
      return;
    }
    
    //update
    const oldEvent = allEvents.filter(item => item.id === value.id);

    const dayUpdate = value.weekDay-oldEvent[0].weekDay;
    // const hourUpdate =
    // const minuteUpdate = 

    value = {...value, 
      start: new Date(value.start.valueOf() + 24*60*60*1000*dayUpdate), 
      end: new Date(value.end.valueOf() + 24*60*60*1000*dayUpdate), 
    } 
    //24*60*60*1000 - 1 den v millisecundech
    //60*60*1000 - 1 hodina v millisecundech
    //60*1000 - 1 minuta v millisecundech
    //1000 - 1 secunda

    const updatedEvents = allEvents.map(item => 
      item.id === value.id ? value : item
    );
    setAllEvents(updatedEvents);
  }

    return (
    <BigCalendarPageStyled>

      {isTabletOrDesktop && <Calendar 
          localizer={localizer} 
          events={allEvents}
          startAccessor="start" 
          endAccessor="end" 
          scrollToTime={new Date(1970, 1, 1, 8)}
          formats={formats}
          defaultView={Views.WEEK}

          titleAccessor={'title'}

          selectable={true}
          toolbar={false} 
          
          style={{height:"80vh", margin: "30px"}} 
          onSelectEvent={handleOpenModal}
          onSelectSlot={handleOpenModal}        
        />}
      {isMobile && <Calendar 
          localizer={localizer} 
          events={allEvents}
          startAccessor="start" 
          endAccessor="end" 
          scrollToTime={new Date(1970, 1, 1, 8)}
          formats={formats}
          defaultView={Views.DAY}

          selectable={true}
          toolbar={true} 
          
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