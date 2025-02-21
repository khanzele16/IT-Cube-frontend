import React from "react";

interface NewsPostProps {
    title: string;
    content: string;
    date: string;
    imageUrl?: string;
}

const NewsPost: React.FC<NewsPostProps> = ({ title, content, date, imageUrl }) => {
    return (
        <div className="max-w-[350px] mx-10 bg-white shadow-lg rounded-lg overflow-hidden my-6">
            {imageUrl && (
                <img src={imageUrl} alt="News Image" className="w-full  object-cover" />
            )}
            <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 ">{title}</h2>
                <p className="text-sm text-gray-500 mt-2">{date}</p>
                <p className="mt-4 text-[14px] text-gray-700">{content}</p>
            </div>
            <div className="px-6 pb-6">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 focus:outline-none">
                    Читать дальше
                </button>
            </div>
        </div>
    );
};

export default NewsPost;
