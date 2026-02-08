import React from 'react';

const Loading = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen w-full bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#0198E9]"></div>
        <p className="mt-4 text-gray-600 font-medium animate-pulse">Please wait...</p>
        </div>
    );
};

export default Loading;