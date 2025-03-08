"use client"
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LineChart, Line, ResponsiveContainer, CartesianGrid } from "recharts";

const projectionData = [
  { date: "Feb 27", projected: 35000, actual: 40000 },
  { date: "Mar 01", projected: 25000, actual: 15000 },
  { date: "Mar 03", projected: 31302, actual: 31034 },
  { date: "Mar 05", projected: 45000, actual: 42000 },
  { date: "Mar 07", projected: 32000, actual: 32000 },
  { date: "Mar 08", projected: 35000, actual: 32000 },
  { date: "Mar 09", projected: 38000, actual: 32000 },
];

const returningCustomersData = [
  { month: "Feb", secondTime: 40, thirdTime: 30, fourthTime: 60 },
  { month: "Mar", secondTime: 50, thirdTime: 40, fourthTime: 80 },
  { month: "Apr", secondTime: 55, thirdTime: 45, fourthTime: 75 },
  { month: "May", secondTime: 60, thirdTime: 50, fourthTime: 80 },
  { month: "Jun", secondTime: 30, thirdTime: 35, fourthTime: 40 },
  { month: "Jul", secondTime: 50, thirdTime: 45, fourthTime: 60 },
  { month: "Aug", secondTime: 55, thirdTime: 50, fourthTime: 70 },
  { month: "Sep", secondTime: 50, thirdTime: 40, fourthTime: 65 },
  { month: "Oct", secondTime: 30, thirdTime: 20, fourthTime: 30 },
  { month: "Nov", secondTime: 70, thirdTime: 60, fourthTime: 80 },
];

const LowerDashboard = () => {
  return (
    <div className="grid grid-cols-2 gap-6 p-6 bg-white min-h-screen">
      {/* Left: Projection vs Actual */}
      <div className="bg-white p-6  rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Projection vs actual</h2>
        <p className="text-gray-500 mb-4">Actual earnings vs projected earnings</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={projectionData} barSize={10}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="projected" fill="#2563eb" name="Projected revenue" />
            <Bar dataKey="actual" fill="#93c5fd" name="Actual revenue" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Right: Returning Customer Rate */}
      <div className="bg-white p-6  rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Returning customer rate</h2>
        <p className="text-gray-500 mb-4">Rate of customers returning to your shop over time</p>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={returningCustomersData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="fourthTime" stroke="#2563eb" strokeWidth={3} name="Fourth time" />
            <Line type="monotone" dataKey="thirdTime" stroke="#93c5fd" strokeWidth={2} strokeDasharray="5 5" name="Third time" />
            <Line type="monotone" dataKey="secondTime" stroke="#60a5fa" strokeWidth={2} strokeDasharray="3 3" name="Second time" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LowerDashboard;
