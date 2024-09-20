"use client";
import Image from "next/image";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Sun",
    present: 50,
    absent: 62,
  },
  {
    name: "Mon",
    present: 87,
    absent: 45,
  },
  {
    name: "Tue",
    present: 64,
    absent: 55,
  },
  {
    name: "Wed",
    present: 45,
    absent: 70,
  },
  {
    name: "Thu",
    present: 60,
    absent: 35,
  },
];

const AttendanceChart = () => {
  return (
    <div className="w-full lg:w-2/3 h-[350px] bg-white p-4 rounded-3xl shadow-lg">
      {/* Title */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" alt="more image" width={20} height={20} />
      </div>
      {/* Chart */}
      <div className="w-full h-[90%] pe-5 ">
        <ResponsiveContainer>
          <BarChart width={500} height={300} data={data} barSize={20}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#ddd"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tick={{ fill: "#abadb0" }}
              tickLine={false}
            />
            <YAxis
              axisLine={false}
              tick={{ fill: "#abadb0" }}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{ borderRadius: "10px", borderColor: "Lightgray" }}
            />
            <Legend
              align="left"
              verticalAlign="top"
              wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
            />
            <Bar
              dataKey="present"
              fill="#94c6d7"
              legendType="circle"
              radius={[8, 8, 0, 0]}
            />
            <Bar
              dataKey="absent"
              fill="#FAE27C"
              legendType="circle"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceChart;
