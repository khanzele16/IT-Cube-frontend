import { Button } from "antd";
import React from "react";

function CourseVideos() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center gap-x-5 py-4 w-full px-[50px]">
        <img
          className="w-[100px] h-[100px] object-cover rounded-lg"
          src="https://d3mxt5v3yxgcsr.cloudfront.net/courses/15007/course_15007_image.png"
          alt="Python-разработчик"
        />
        <div className="flex flex-col gap-y-1">
          <h3 className="text-2xl font-bold">
            Python разработчик{" "}
            <span className="text-lg text-gray-400">(всего 13 видео)</span>
          </h3>
          <p className="max-w-[800px] text-gray-600">
            Научитесь создавать приложения на Python, работать с данными и
            строить логические алгоритмы. Это отличный курс для тех, кто хочет
            углубить свои знания в программировании и разработке.
          </p>
        </div>
        <div className="ml-auto flex items-center gap-x-4">
          <Button size="large" color="blue" variant="solid" type="primary">
            Записаться
          </Button>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-200"></div>
      <div className="flex flex-col px-6 gap-y-4">
        <h4 className="text-xl font-semibold">Видео курса</h4>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="h-[200px] bg-gray-300 mb-2 rounded-lg"></div>
            <p className="text-center text-gray-700">
              Видео 1: Введение в Python
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="h-[200px] bg-gray-300 mb-2 rounded-lg"></div>
            <p className="text-center text-gray-700">
              Видео 2: Основы синтаксиса
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="h-[200px] bg-gray-300 mb-2 rounded-lg"></div>
            <p className="text-center text-gray-700">Видео 3: Функции</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="h-[200px] bg-gray-300 mb-2 rounded-lg"></div>
            <p className="text-center text-gray-700">Видео 3: Функции</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseVideos;
