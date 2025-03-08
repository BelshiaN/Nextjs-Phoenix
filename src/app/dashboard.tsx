"use client";
import { RadialBarChart, RadialBar,Line,Legend,CartesianGrid,LineChart,BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { PieChart, Pie, Cell } from "recharts";

const halfpiedata = [
    { name: "Paying customer", value: 30, fill: "#2563eb" }, 
    { name: "Non-paying customer", value: 70, fill: "#e0e7ff" }, 
  ];
const rounddata = [
    { name: "Percentage discount", value: 72, fill: "#2d6cff" },
    { name: "Fixed card discount", value: 18, fill: "#69a2ff" },
    { name: "Fixed product discount", value: 10, fill: "#0044a6" },
  ];
  
  const style = {
    top: "50%",
    right: "10%",
    transform: "translate(0, -50%)",
    lineHeight: "24px",
  };
const carddata = [
    { name: "Day 1", completed: 1200, pending: 1300 },
    { name: "Day 2", completed: 1800, pending: 1600 },
    { name: "Day 3", completed: 900, pending: 1400 },
    { name: "Day 4", completed: 1500, pending: 1700 },
    { name: "Day 5", completed: 800, pending: 1200 },
    { name: "Day 6", completed: 1400, pending: 1500 },
    { name: "Day 7", completed: 1600, pending: 1700 },
  ];
  const newCustomersData = [
    { name: "01 May", current: 50, previous: 45 },
    { name: "02 May", current: 55, previous: 50 },
    { name: "03 May", current: 60, previous: 55 },
    { name: "04 May", current: 48, previous: 50 },
    { name: "05 May", current: 70, previous: 60 },
    { name: "06 May", current: 65, previous: 58 },
    { name: "07 May", current: 75, previous: 62 },
  ];
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Dashboard() {
  return (
    <div className="p-6 bg-[#f5f7fa] min-h-screen">
           <h1 className="text-3xl font-bold">Ecommerce Dashboard</h1>
           <p className="text-gray-600">Here's what’s going on at your business right now</p>
           <div className="mt-6 grid grid-cols-5 gap-4">
        <div className="p-4 rounded-lg flex items-center space-x-3">
        <div className="relative w-10 h-10">
      
        <div
            className="absolute w-9 h-9 rotate-12 rounded-md mt-3"
            style={{ backgroundColor: "#90d67f" }}
        ></div>

      
        <div
            className="absolute w-9 h-9 bg-green-400 rounded-full left-2 top-0"
            style={{ backgroundColor: "#d9fbd0" }}
        ></div>

       
        <svg
            className="absolute w-5 h-5 left-4 top-2"
            style={{ color: "#25b003" }}
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="star"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
        >
            <path
            fill="currentColor"
            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
            ></path>
        </svg>
        </div>

          <div>
            <h2 className="text-lg font-semibold">57 new orders</h2>
            <p className="text-sm text-gray-600">Awaiting processing</p>
          </div>
        </div>

        <div className="p-4 rounded-lg flex items-center space-x-3">
        <div className="relative w-10 h-10">
     
        <div
            className="absolute w-9 h-9 rotate-12 rounded-md mt-3"
            style={{ backgroundColor: "#ffcc85" }}
        ></div>

        <div
            className="absolute w-9 h-9 bg-green-400 rounded-full left-2 top-0"
            style={{ backgroundColor: "#ffefca" }}
        ></div>


        <svg
        className="absolute w-5 h-5 left-4 top-2"
        style={{ color: "#e67e22" }}
        aria-hidden="true"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
         >
        <path
          fill="currentColor"
          d="M96 479.5H24C10.7 479.5 0 468.8 0 455.5V56.5C0 43.2 10.7 32.5 24 32.5H96c13.3 0 24 10.7 24 24v399c0 13.3-10.7 24-24 24zm200-399v399c0 13.3-10.7 24-24 24h-72c-13.3 0-24-10.7-24-24V56.5c0-13.3 10.7-24 24-24h72c13.3 0 24 10.7 24 24z"
        ></path>
      </svg>
        </div>

          <div>
            <h2 className="text-lg font-semibold">5 orders</h2>
            <p className="text-sm text-gray-600">On hold</p>
          </div>
        </div>


        <div className="p-4 rounded-lg flex items-center space-x-3">
        <div className="relative w-10 h-10">
     
        <div
            className="absolute w-9 h-9 rotate-12 rounded-md mt-3"
            style={{ backgroundColor: "#f48270" }}
        ></div>

        <div
            className="absolute w-9 h-9 bg-green-400 rounded-full left-2 top-0"
            style={{ backgroundColor: "#ffe0db" }}
        ></div>


            <svg
            className="absolute w-5 h-5 left-4 top-2"
            style={{ color: "#e74c3c" }} 
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            >
            <path
                fill="currentColor"
                d="M377 105c9.4-9.4 9.4-24.6 0-33.9L341 36.1c-9.4-9.4-24.6-9.4-33.9 0L192 151 77 36.1c-9.4-9.4-24.6-9.4-33.9 0L7 71c-9.4 9.4-9.4 24.6 0 33.9L121 192 7 305c-9.4 9.4-9.4 24.6 0 33.9l36.1 36.1c9.4 9.4 24.6 9.4 33.9 0L192 233l115 115c9.4 9.4 24.6 9.4 33.9 0l36.1-36.1c9.4-9.4 9.4-24.6 0-33.9L263 192 377 105z"
            ></path>
            </svg>

        </div>

          <div>
            <h2 className="text-lg font-semibold">5 orders</h2>
            <p className="text-sm text-gray-600">On hold</p>
          </div>
        </div>
      </div>

            {/* Sales Chart */}
      <div className="mt-8 bg-[#f5f7fa] p-6 rounded-lg ">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Total Sells</h2>
          <select className="border px-3 py-1 rounded">
            <option>Mar 1 - 31, 2023</option>
            <option>Apr 1 - 30, 2023</option>
          </select>
        </div>
        <p className="text-gray-600 text-sm">Payment received across all channels</p>

        <div className="mt-4">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            
            </LineChart>
          </ResponsiveContainer>
          
        </div>
      </div>
      
      <div className="p-6 bg-[#f5f7fa] min-h-screen">
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
     
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-2">
              <h2 className="text-lg font-semibold">Total orders</h2>
              <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-md">-6.8%</span>
            </div>
            <h2 className="text-2xl font-bold">16,247</h2>
          </div>

        
          <div className="mt-4">
            <ResponsiveContainer width="100%" height={120}>
              <BarChart data={carddata} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                <XAxis dataKey="name" hide />
                <YAxis hide />
                <Tooltip cursor={{ fill: "transparent" }} />
                <Bar dataKey="pending" fill="#2d6cff" stackId="stack" barSize={20} />
                <Bar dataKey="completed" fill="rgba(45, 108, 255, 0.2)" stackId="stack" barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>

         
          <div className="flex justify-between mt-4">
            <div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                <span className="text-sm text-gray-600">Completed</span>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <span className="w-3 h-3 bg-blue-200 rounded-full"></span>
                <span className="text-sm text-gray-600">Pending payment</span>
              </div>
            </div>
            <div className="text-sm text-gray-600 text-right">
              <p>52%</p>
              <p>48%</p>
            </div>
          </div>
        </div>

        
        <div className="p-6 bg-white rounded-lg shadow-md">
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-2">
              <h2 className="text-lg font-semibold">New customers</h2>
              <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-md">+26.5%</span>
            </div>
            <h2 className="text-2xl font-bold">356</h2>
          </div>
          <p className="text-gray-500 text-sm">Last 7 days</p>

          
          <div className="mt-4">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={newCustomersData}>
                <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#777" }} />
                <YAxis hide />
                <Tooltip />
                <Line type="monotone" dataKey="previous" stroke="#ddd" strokeWidth={2} />
                <Line type="monotone" dataKey="current" stroke="#2d6cff" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

      
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Top coupons</h2>
          <p className="text-gray-500 text-sm">Last 7 days</p>

        
          <div className="flex items-center justify-center mt-4 relative">
            <PieChart width={200} height={200}>
              <Pie
                data={rounddata}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={70}
                startAngle={90}
                endAngle={-270}
                dataKey="value"
                paddingAngle={3}
              >
                {rounddata.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} stroke="#ffffff" strokeWidth={2} />
                ))}
              </Pie>
            </PieChart>
            <p className="absolute text-2xl font-bold">72%</p>
          </div>

     
          <div className="mt-4">
            {rounddata.map((item) => (
              <div key={item.name} className="flex justify-between text-gray-700 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="w-4 h-4 rounded-full" style={{ backgroundColor: item.fill }}></span>
                  <span>{item.name}</span>
                </div>
                <span>{item.value}%</span>
              </div>
            ))}
          </div>
        </div>


        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Paying vs non paying</h2>
          <p className="text-gray-500 text-sm">Last 7 days</p>

       
          <div className="flex items-center justify-center mt-6 relative mb-15">
            <PieChart width={250} height={150}>
              <Pie
                data={halfpiedata}
                cx="50%"
                cy="100%"
                startAngle={180}
                endAngle={0}
                innerRadius={50}
                outerRadius={70}
                dataKey="value"
                stroke="none"
              >
                {halfpiedata.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </div>

    
          <div className="mt-4">
            {halfpiedata.map((item) => (
              <div key={item.name} className="flex justify-between text-gray-700 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="w-4 h-4 rounded-full" style={{ backgroundColor: item.fill }}></span>
                  <span>{item.name}</span>
                </div>
                <span>{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
