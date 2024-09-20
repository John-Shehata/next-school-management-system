import React from "react";

const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-sm text-gray-400">View all</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-mainSky rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Midterm Exams</h2>
            <span className="text-sm text-gray-600 bg-white rounded-md p-1 flex items-center justify-center">
              6 Nov
            </span>
          </div>
        </div>
        <div className="bg-mainPurple rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Final Exams</h2>
            <span className="text-sm text-gray-600 bg-white rounded-md p-1 flex items-center justify-center">
              5 Jan
            </span>
          </div>
        </div>
        <div className="bg-mainYellow rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Project Graduation</h2>
            <span className="text-sm text-gray-600 bg-white rounded-md p-1 flex items-center justify-center">
              29 Jan
            </span>
          </div>
        </div>
        <div className="bg-mainSky rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">End of first term</h2>
            <span className="text-sm text-gray-600 bg-white rounded-md p-1 flex items-center justify-center">
              1 Feb
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
