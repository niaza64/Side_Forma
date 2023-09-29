import React from 'react';

const MainBody: React.FC = () => {
  return (
    <div className="relative h-screen bg-gradient-to-r from-blue-500 to-green-500 animate-pulse">
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-8xl text-white font-bold">Meds Delivery Made Easy</h1>
      </div>
    </div>
  );
}

export default MainBody;