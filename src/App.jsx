import React from 'react';
import './App.css'; // Tailwind CSS styles

function App() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('/Home page (3).jpg')" }}>
      <nav className="p-6 flex justify-between items-center">
        <div className="text-white text-xl font-bold">KiaKia</div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Connect your wallet</button>
      </nav>

      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-white text-5xl font-bold font-quantico">WELCOME TO KIAKIA</h1>
        <p className="text-gray-300 mt-2 text-center">
          ...your one stop app for searching anything, anytime and decentralised
        </p>

        <div className="mt-6 w-full max-w-md">
          <div className="relative">
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md text-gray-900"
              placeholder="Search for a hospital, airport, hotel... nearest to you"
            />
            <button className="absolute top-0 right-0 h-full px-6 bg-gray-700 text-white rounded-r-md">
              &#x2191;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
