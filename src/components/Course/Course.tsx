import React from "react";

function Course() {
  return (
    <div className="border rounded-xl border-gray-200 py-5 px-4 w-[300px] gap-y-4 flex flex-col justify-between items-center content-center transition-all transform hover:translate-y-[-4px] hover:shadow-sm duration-300">
      <p className="ml-auto text-xl text-gray-500 font-semibold">12+</p>
      <img
        className="w-[125px]"
        src="https://d3mxt5v3yxgcsr.cloudfront.net/courses/15007/course_15007_image.png"
        alt="Python-разработчик"
      />
      <p className="text-center text-lg font-medium text-gray-700">
        Python-разработчик
      </p>
      <p className="text-center text-sm text-gray-600">
        Научитесь создавать приложения на Python, работать с данными и строить
        логические алгоритмы.
      </p>
      <button className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
        Записаться
      </button>
    </div>
  );
}

export default Course;
