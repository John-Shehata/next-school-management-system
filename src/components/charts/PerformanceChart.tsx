"use client";
import Image from "next/image";
import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 92, fill: "#FAE27C" },
  { name: "Group B", value: 8, fill: "#9dd0e0" },
];

const PerformanceChart = () => {
  return (
    <div className="bg-white rounded-xl p-4 h-72 relative shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Performance</h1>
        <Image src="/moreDark.png" alt="more image" width={16} height={16} />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-2xl font-bold">9.2</h1>
        <p className="text-xs text-gray-500">Of 10 max LTS</p>
      </div>
      <h2 className="absolute font-medium bottom-16 left-0 right-0 text-center">1st Semester - 2nd Semster </h2>
    </div>
  );
};

export default PerformanceChart;
