import CalendarSide from "@/components/CalenderEvents/CalendarSide";
import LessonSchedule from "@/components/LessonSchedule";

const TeacherPage = () => {
  return (
    <div className="flex flex-col xl:flex-row p-4 gap-4">
      {/* Left Side */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white rounded-lg p-4 shadow-lg">
          <h1 className="text-xl font-semibold">Schedule</h1>
          <LessonSchedule />
        </div>
      </div>
      {/* Right Side */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <CalendarSide />
      </div>
    </div>
  );
};

export default TeacherPage;
