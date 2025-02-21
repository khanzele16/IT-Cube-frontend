import React from 'react'

function Teacher({imageUrl, name, language}) {
    return (

        <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md">
            <div className="flex flex-col items-center gap-6 mb-6">
                <img
                    className="w-[100px] h-[100px] object-cover rounded-full border-2 border-gray-200"
                    src={imageUrl}
                    alt="Профиль пользователя"
                />
                <div className="flex flex-col mt-10">
                    <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
                    <p className="text-gray-600 mt-10" >{language}</p>
                    <p className="text-gray-500 text-sm">
                        На платформе с января 2022 года
                    </p>
                </div>
            </div>

        </div>

    )
}

export default Teacher