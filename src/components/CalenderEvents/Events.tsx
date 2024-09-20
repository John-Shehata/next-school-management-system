const events = [
  {
    id: 1,
    title: "Math Exam ",
    time: "7:00 AM - 9:00 AM",
    description: "Math exam today to determine the level",
  },
  {
    id: 2,
    title: "Party",
    time: "12:00 PM - 2:00 PM",
    description: "Music, plays and funny events",
  },
];

const Events = () => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-lg font-semibold ms-3">Events</h1>
      {events.map((event) => (
        <div
          className="p-3 rounded-md border-t-[6px] odd:border-t-mainPurple even:border-t-mainYellow bg-white shadow-md hover:bg-skyLight transition-all"
          key={event.id}
        >
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-gray-600">{event.title}</h1>
            <span className="text-gray-300 text-sm">{event.time}</span>
          </div>
          <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Events;
