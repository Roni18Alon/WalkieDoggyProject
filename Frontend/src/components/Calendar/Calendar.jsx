import React, { useState } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayjs from "dayjs";
import { Modal, TextField, Button } from "@material-ui/core";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import axios from "axios";

const Calendar = () => {
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [selectedDuration, setSelectedDuration] = useState(10);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [userMail, setUserMail] = useState("");

  const [selectInfo, setSelectedInfo] = useState(undefined);

  const handleDateSelect = (selectInfo) => {
    setModalOpen(true);
    setUserMail(JSON.parse(localStorage.getItem("userEmailForCalander") ?? ""));
    console.log(
      "my startTime: " +
        selectInfo.startStr.slice(0, 10) +
        " " +
        selectInfo.startStr.slice(11, 16) +
        ":00"
    );

    setSelectedInfo(selectInfo);
    setStartTime(
      selectInfo.startStr.slice(0, 10) +
        " " +
        selectInfo.startStr.slice(11, 16) +
        ":00"
    );

    setModalTitle(
      selectInfo.startStr.slice(0, 10) + " " + selectInfo.startStr.slice(11, 16)
    );
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setPrice(0);
  };

  const handleModalSave = async (e) => {
    e.preventDefault();
    console.log("in modal save");

    const url =
      "https://aej45saso5.execute-api.us-east-1.amazonaws.com/prod/add_hours";

    const params = new URLSearchParams({
      user_mail: userMail,
    });

    if (selectInfo && modalTitle) {
      let end;
      console.log("selectedDuration: " + selectedDuration);
      if (selectedDuration === 10) {
        console.log("in 10 if");
        end = dayjs(selectInfo.start)
          .add(10, "minute")
          .format("YYYY-MM-DD HH:mm:ss");
      } else if (selectedDuration === 20) {
        end = dayjs(selectInfo.start)
          .add(20, "minute")
          .format("YYYY-MM-DD HH:mm:ss");
      } else if (selectedDuration === 50) {
        end = dayjs(selectInfo.start)
          .add(50, "minute")
          .format("YYYY-MM-DD HH:mm:ss");
      } else {
        end = dayjs(selectInfo.end).format("YYYY-MM-DD HH:mm:ss");
      }
      console.log("my EndTime: " + end);
      const newEvent = {
        title: modalTitle,
        start: selectInfo.startStr,
        end: end,
        allDay: selectedDuration === 1440,
        color: "red",
      };

      const requestData = {
        start_time: startTime,
        end_time: end,
        price: price,
      };

      setCalendarEvents([...calendarEvents, newEvent]);

      try {
        const response = await axios.post(
          `${url}?${params}`,
          JSON.stringify(requestData),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log(requestData);
        console.log(response);
        setPrice(0);
      } catch (error) {
        console.log("Error:", error);
      }

      console.log(requestData);
      setModalOpen(false);
      setModalTitle("");
    }
  };

  const handleDurationChange = (event) => {
    setSelectedDuration(parseInt(event.target.value, 10));
  };

  const CustomModal = ({ open, onClose, onSend }) => {
    return (
      <Dialog open={open} onClose={onClose} maxWidth="md">
        <DialogTitle align="center">{modalTitle}</DialogTitle>
        <DialogContent style={{ width: "450px", height: "250px" }}>
          <div>
            <br></br>
            <h3 className="mt-2" style={{ fontSize: "25px" }}>
              please enter your minimum salary
            </h3>
            <br></br>
            <br></br>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={price}
              onChange={(e) => setPrice(parseInt(e.target.value))}
              className="h-2 p-0 bg-gray-300 border-none outline-none focus:border-none focus:outline-none"
              id={"Price-range" + price}
            />
            <h3
              className="mt-8"
              style={{ textAlign: "center", fontSize: "25px" }}
            >
              {" "}
              {price}
            </h3>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={onSend}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <div
      className="min-w-[900px] overflow-x-auto"
      style={{
        background: "",
        width: "100%",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="flex flex-col mb-4">
        <label style={{ position: "static" }} className="text-gray-500 text-md">
          Select Duration:
        </label>
        <select
          className="inline-block -mt-4 w-[150px]"
          value={selectedDuration}
          onChange={handleDurationChange}
        >
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
      <CustomModal
        open={modalOpen}
        onClose={handleModalClose}
        onSend={handleModalSave}
      />
    </div>
  );
};

export default Calendar;
