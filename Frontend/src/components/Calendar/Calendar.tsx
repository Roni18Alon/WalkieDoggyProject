<<<<<<< HEAD
import React, { useState } from "react";
=======
import React from "react";
>>>>>>> origin
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
<<<<<<< HEAD
import { DateSelectArg } from "@fullcalendar/core";
import dayjs from "dayjs";

interface EventObject {
  title: string;
  start: Date | string;
  end: Date | string;
  allDay?: boolean;
  color?: string;
}

const Calendar: React.FC = () => {
  const [calendarEvents, setCalendarEvents] = useState<EventObject[]>([]);
  const [selectedDuration, setSelectedDuration] = useState(0);

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    let title = prompt("Please enter a new title for your event");

    if (title) {
      let end;
      if (selectedDuration === 10) {
        end = dayjs(selectInfo.start).add(10, "minute").toDate();
      } else if (selectedDuration === 20) {
        end = dayjs(selectInfo.start).add(20, "minute").toDate();
      } else if (selectedDuration === 50) {
        end = dayjs(selectInfo.start).add(50, "minute").toDate();
      } else {
        end = selectInfo.end;
      }

      const newEvent: EventObject = {
        title,
        start: selectInfo.startStr,
        end: end.toISOString(),
        allDay: selectedDuration === 1440,
        color: "red",
      };

      setCalendarEvents([...calendarEvents, newEvent]);
    }
  };

  const handleDurationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedDuration(parseInt(event.target.value, 10));
  };

  return (
    <div>
      <div>
        <label>Select Duration:</label>
        <select value={selectedDuration} onChange={handleDurationChange}>
          <option value={10}>10 minutes</option>
          <option value={20}>20 minutes</option>
          <option value={50}>50 minutes</option>
          <option value={1440}>Full day</option>
        </select>
      </div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        slotDuration="00:30:00"
        slotLabelInterval={{
          hours: 1,
        }}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        height="90vh"
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={true}
        events={calendarEvents}
        select={handleDateSelect}
      />
    </div>
  );
};
=======

function Calendar() {
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
        }}
        height={"90vh"}
      />
    </div>
  );
}
>>>>>>> origin

export default Calendar;
