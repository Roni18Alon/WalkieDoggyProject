import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import dayjs from "dayjs";

export default function StaticDateTimePickerLandscape() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDateTimePicker
        orientation="landscape"
        ampm={false}
        defaultValue={dayjs(new Date())}
        // onChange={sethandler}
      />
    </LocalizationProvider>
  );
}
