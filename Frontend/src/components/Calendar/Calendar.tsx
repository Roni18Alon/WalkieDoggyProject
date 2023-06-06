import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
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
    <div className="min-w-[900px] overflow-x-auto" style={{ background: "", width: "100%", padding: "20px", display: "flex", flexDirection: "column" }}>
      <div className="flex flex-col mb-4">
        <label style={{position: "static"}} className="text-gray-500 text-md" >Select Duration:</label>
        <select className="inline-block -mt-4 w-[150px]" value={selectedDuration} onChange={handleDurationChange}>
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

export default Calendar;
