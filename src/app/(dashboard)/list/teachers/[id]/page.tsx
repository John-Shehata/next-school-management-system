import Announcements from "@/components/CalenderEvents/Announcements";
import PerformanceChart from "@/components/charts/PerformanceChart";
import LessonSchedule from "@/components/LessonSchedule";
import Image from "next/image";
import Link from "next/link";

const smallCards = [
  {
    imageSrc: "/singleAttendance.png",
    imageAlt: "Single Attendance Image",
    title: "90%",
    description: "Attendance",
  },
  {
    imageSrc: "/singleBranch.png",
    imageAlt: "Single Branch Image",
    title: "2",
    description: "Branches",
  },
  {
    imageSrc: "/singleLesson.png",
    imageAlt: "Single Lesson Image",
    title: "8",
    description: "Lessons",
  },
  {
    imageSrc: "/singleClass.png",
    imageAlt: "Single Class Image",
    title: "6",
    description: "Classes",
  },
];

const SingleTeacherPage = () => {
  return (
    <div className="flex flex-col gap-4 xl:flex-row p-4">
      {/* Left */}
      <div className="w-full xl:w-2/3">
        {/* Top */}
        <div className="flex flex-col gap-4 lg:flex-row xl:flex-col 2xl:flex-row">
          {/* Teacher Card */}
          <div className="flex gap-4 p-6 rounded-xl bg-mainSky shadow-lg min-w-[480px] h-[270px] sm:h-[200px] hover:-translate-y-2 transition-all duration-200">
            <div className="w-1/3">
              <Image
                src="/teacher.jfif"
                alt="Teacher Image"
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-bold">John Shehata</h1>
              <p className="text-sm text-gray-500">
                Teacher for Programming and Problem Solving
              </p>
              <div className="flex-1 flex items-center justify-between flex-wrap text-xs font-medium">
                <div className="w-full sm:w-2/3 flex items-center gap-2 p-2">
                  <Image
                    src="/date.png"
                    alt="Date Image"
                    width={14}
                    height={14}
                  />
                  <span>January 2025</span>
                </div>
                <div className="w-full sm:w-1/3 flex items-center gap-2 p-2">
                  <Image
                    src="/blood.png"
                    alt="Blood Image"
                    width={14}
                    height={14}
                  />
                  <span>O+</span>
                </div>
                <div className="w-full sm:w-2/3 flex items-center gap-2 p-2">
                  <Image
                    src="/mail.png"
                    alt="Mail Image"
                    width={14}
                    height={14}
                  />
                  <span>johnshehata11@gmail.com</span>
                </div>
                <div className="w-full sm:w-1/3 flex items-center gap-2 p-2">
                  <Image
                    src="/phone.png"
                    alt="Phone Image"
                    width={14}
                    height={14}
                  />
                  <span>01129778056</span>
                </div>
              </div>
            </div>
          </div>
          {/* Small Cards */}
          <div className="flex gap-4 justify-between flex-wrap">
            {smallCards.map((card) => (
              <div
                className="bg-white p-4 rounded-xl flex gap-4 w-full sm:w-[48%] lg:w-[47%] shadow-md"
                key={card.description}
              >
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <div>
                  <h1 className="text-xl font-semibold">{card.title}</h1>
                  <span className="text-sm text-gray-400">
                    {card.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Bottom */}
        <div className="mt-4 bg-white rounded-xl p-4 h-[800px] shadow-lg">
          <h1 className="text-lg font-semibold">Teacher&apos;s Schedule</h1>
          <LessonSchedule />
        </div>
      </div>
      {/* Right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link className="p-3 rounded-md bg-skyLight" href="/">Teacher&apos;s Classes</Link>
            <Link className="p-3 rounded-md bg-purpleLight" href="/">Teacher&apos;s Students</Link>
            <Link className="p-3 rounded-md bg-yellowLight" href="/">Teacher&apos;s Lessons</Link>
            <Link className="p-3 rounded-md bg-yellowLight" href="/">Teacher&apos;s Exams</Link>
            <Link className="p-3 rounded-md bg-skyLight" href="/">Teacher&apos;s Assignments</Link>
          </div>
        </div>
        <PerformanceChart/>
        <Announcements/>
      </div>
    </div>
  );
};

export default SingleTeacherPage;
