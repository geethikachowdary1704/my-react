import React from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen w-full min-w-screen">
      <Sidebar />
      <div className="grow w-full">
        <Navbar />
        <div className="grow flex flex-col p-6">
          <h1 className="text-2xl font-bold mb-4">
            Welcome to Dashboard
          </h1>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 shadow rounded">
              Name
            </div>
            <div className="bg-white p-4 shadow rounded">
              Designation
            </div>
            <div className="bg-white p-4 shadow rounded">
              Salary
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
