import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function BasicDatePicker({ label, handleDateChange }) {
  const popperPlacement = "top-start";
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label={label}
          onChange={handleDateChange}
          PopperProps={{
            placement: popperPlacement,
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
