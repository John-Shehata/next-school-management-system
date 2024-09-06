import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";

const menuItems = [
  {
    icon: "/home.png",
    label: "Home",
    href: "/",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: "/teacher.png",
    label: "Teachers",
    href: "/list/teachers",
    visible: ["admin", "teacher"],
  },
  {
    icon: "/student.png",
    label: "Students",
    href: "/list/students",
    visible: ["admin", "teacher"],
  },
  {
    icon: "/parent.png",
    label: "Parents",
    href: "/list/parents",
    visible: ["admin", "teacher"],
  },
  {
    icon: "/subject.png",
    label: "Subjects",
    href: "/list/subjects",
    visible: ["admin"],
  },
  {
    icon: "/class.png",
    label: "Classes",
    href: "/list/classes",
    visible: ["admin", "teacher"],
  },
  {
    icon: "/lesson.png",
    label: "Lessons",
    href: "/list/lessons",
    visible: ["admin", "teacher"],
  },
  {
    icon: "/exam.png",
    label: "Exams",
    href: "/list/exams",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: "/assignment.png",
    label: "Assignments",
    href: "/list/assignments",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: "/result.png",
    label: "Results",
    href: "/list/results",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: "/attendance.png",
    label: "Attendance",
    href: "/list/attendance",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: "/calendar.png",
    label: "Events",
    href: "/list/events",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: "/message.png",
    label: "Messages",
    href: "/list/messages",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: "/announcement.png",
    label: "Announcements",
    href: "/list/announcements",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: "/profile.png",
    label: "Profile",
    href: "/profile",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: "/setting.png",
    label: "Settings",
    href: "/settings",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: "/logout.png",
    label: "Logout",
    href: "/logout",
    visible: ["admin", "teacher", "student", "parent"],
  },
];

const Menu = () => {
  return (
    <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]">
      <Logo />
      <div className="mt-2 text-sm">
        <div className="p-3 font-bold text-gray-400">Menu</div>
        {menuItems.map((menuItem) => {
          return (
            <Link
              key={menuItem.label}
              href={menuItem.href}
              className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 hover:bg-gray-100 hover:scale-x-105 p-4 transition duration-300"
            >
              <Image
                src={menuItem.icon}
                alt="item image"
                width={20}
                height={20}
              />
              <span className="hidden lg:block">{menuItem.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
