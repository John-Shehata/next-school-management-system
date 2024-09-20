"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Events from "./Events";
import Announcements from "./Announcements";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarSide = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="flex flex-col gap-2 ">
      <Calendar onChange={onChange} value={value} className="p-2" />
      <Events />
      <Announcements />
    </div>
  );
};

export default CalendarSide;
