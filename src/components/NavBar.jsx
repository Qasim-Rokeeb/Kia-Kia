import React from 'react';

const NavBar = () => {
  return (
    <nav className="p-6 flex justify-between items-center">
      <div className="text-white text-xl font-bold">KiaKia</div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Connect your wallet</button>
    </nav>
  );
};

export default NavBar;
