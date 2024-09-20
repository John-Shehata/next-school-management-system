"use client";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "total",
    count: 1257,
    fill: "white",
  },
  {
    name: "Boys",
    count: 541,
    fill: "#9dd0e0",
  },
  {
    name: "Girls",
    count: 716,
    fill: "#FAE27C",
  },
];

const CountChart = () => {
  return (
    <div className="w-full lg:w-1/3 h-[350px] bg-white p-4 rounded-3xl shadow-lg">
      {/* Title */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="more image" width={20} height={20} />
      </div>
      {/* Chart */}
      <div className="relative w-full h-[65%] ">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="50%"
            outerRadius="110%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt="male and female image"
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* Bottom */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1 items-center">
          <div className="w-5 h-5 rounded-full bg-[#9dd0e0]" />
          <div className="font-bold">541</div>
          <div className="text-sm text-gray-400">Boys 43%</div>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <div className="w-5 h-5 rounded-full bg-mainYellow" />
          <div className="font-bold">716</div>
          <div className="text-sm text-gray-400">Girls 57%</div>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
