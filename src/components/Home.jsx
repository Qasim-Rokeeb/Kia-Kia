import React from 'react';
import NavBar from './NavBar';
import SearchBar from './SearchBar';

const Home = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('Home page (3).jpg')" }}>
      <NavBar />
      
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-white text-5xl font-bold font-quantico">WELCOME TO KIAKIA</h1>
        <p className="text-gray-300 mt-2 text-center">
          ...your one stop app for searching anything, anytime and decentralised
        </p>
        
        <SearchBar />
      </div>
    </div>
  );
};

export default Home;
