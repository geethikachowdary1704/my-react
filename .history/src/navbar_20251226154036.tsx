import React from "react";

const Navbar = () => {
  return (
    <div className="h-14 bg-white shadow flex items-center justify-between px-6">
      <h3 className="font-semibold">Dashboard</h3>
      <button className="bg-red-500 text-white px-4 py-1 rounded">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
