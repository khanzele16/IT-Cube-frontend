import React from "react";

function Profile() {
  return (
    <div className="w-full flex flex-col">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md">
        <div className="flex items-center gap-6 mb-6">
          <img
            className="w-[100px] h-[100px] object-cover rounded-full border-2 border-gray-200"
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Профиль пользователя"
          />
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-gray-800">Иван Иванов</h2>
            <p className="text-gray-600">Python-разработчик</p>
            <p className="text-gray-500 text-sm">
              На платформе с января 2022 года
            </p>
          </div>
        </div>
        <div className="flex gap-4 mb-6">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors">
            Редактировать профиль
          </button>
          <button className="bg-gray-100 text-gray-800 py-2 px-6 rounded-lg hover:bg-gray-200 transition-colors">
            Настройки
          </button>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Мои курсы
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="h-[150px] bg-gray-300 mb-2 rounded-lg"></div>
              <p className="text-center text-gray-700">Основы Python</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="h-[150px] bg-gray-300 mb-2 rounded-lg"></div>
              <p className="text-center text-gray-700">Продвинутый Python</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="h-[150px] bg-gray-300 mb-2 rounded-lg"></div>
              <p className="text-center text-gray-700">
                Введение в Data Science
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Активность
          </h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700">
              Вы завершили 5 курсов за последний месяц.
            </p>
            <p className="text-gray-500 text-sm">
              Последняя активность: "Основы Python", 1 неделя назад
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
