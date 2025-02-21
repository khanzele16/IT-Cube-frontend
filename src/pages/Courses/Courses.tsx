import React from "react";
import Course from "../../components/Course/Course";

function Courses() {
  return (
    <div className="w-full gap-y-4 flex flex-col items-center">
      <h3 className="font-bold text-4xl mb-4">Курсы</h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center items-center w-full px-4">
        <Course />
        <Course />
        <Course />
        <Course />
        <Course />
      </ul>
    </div>
  );
}

export default Courses;
