import React, { useState } from "react";

interface CalendarProps {
  onSelectDateTime: (selectedDateTime: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({ onSelectDateTime }) => {
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);

  const handleDateTimeClick = (dateTime: Date) => {
    setSelectedDateTime(dateTime);
    onSelectDateTime(dateTime);
  };

  const renderCalendar = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const startingWeekDay = firstDayOfMonth.getDay(); // 0 (Sunday) to 6 (Saturday)
    const totalDaysInMonth = new Date(year, month + 1, 0).getDate();

    const calendarDays = [];

    for (let i = 0; i < startingWeekDay; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="empty-day"></div>);
    }

    for (let i = 1; i <= totalDaysInMonth; i++) {
      const date = new Date(year, month, i);

      for (let hour = 0; hour < 24; hour++) {
        const dateTime = new Date(year, month, i, hour);
        const isToday = currentDate.toDateString() === dateTime.toDateString();
        const isSelected = selectedDateTime?.getTime() === dateTime.getTime();

        const classNames = ["calendar-day"];
        if (isToday) classNames.push("today");
        if (isSelected) classNames.push("selected");

        calendarDays.push(
          <div
            key={`${i}-${hour}`}
            className={classNames.join(" ")}
            onClick={() => handleDateTimeClick(dateTime)}
          >
            {i} - {hour}:00
          </div>
        );
      }
    }

    return calendarDays;
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={() => setSelectedDateTime(null)}>Clear</button>
        <button onClick={() => setSelectedDateTime(null)}>Select</button>
        {selectedDateTime && (
          <span>Selected Date/Time: {selectedDateTime.toLocaleString()}</span>
        )}
      </div>
      <div className="calendar-body">{renderCalendar()}</div>
    </div>
  );
};

export default Calendar;
