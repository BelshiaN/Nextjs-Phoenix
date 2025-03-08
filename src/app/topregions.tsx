// "use client";

// import { useEffect, useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// const regionsData = [
//   { id: 1, country: "India", flag: "https://flagcdn.com/w40/in.png", users: 92896, transactions: 67, revenue: 7560, convRate: 14.01, coords: [20.5937, 78.9629] },
//   { id: 2, country: "China", flag: "https://flagcdn.com/w40/cn.png", users: 50496, transactions: 54, revenue: 6532, convRate: 23.56, coords: [35.8617, 104.1954] },
//   { id: 3, country: "USA", flag: "https://flagcdn.com/w40/us.png", users: 45679, transactions: 35, revenue: 5432, convRate: 10.23, coords: [37.0902, -95.7129] },
//   { id: 4, country: "South Korea", flag: "https://flagcdn.com/w40/kr.png", users: 36453, transactions: 22, revenue: 4673, convRate: 8.85, coords: [35.9078, 127.7669] },
//   { id: 5, country: "Vietnam", flag: "https://flagcdn.com/w40/vn.png", users: 15007, transactions: 17, revenue: 2456, convRate: 6.01, coords: [14.0583, 108.2772] },
// ];

// const TopRegions = () => {
//   const [isClient, setIsClient] = useState(false);
//   const [markerIcon, setMarkerIcon] = useState(null);

//   useEffect(() => {
//     setIsClient(true);

//     if (typeof window !== "undefined") {
//       const L = require("leaflet");
//       setMarkerIcon(
//         new L.Icon({
//           iconUrl: require("leaflet/dist/images/marker-icon.png"),
//           shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
//           iconSize: [25, 41],
//           iconAnchor: [12, 41],
//           popupAnchor: [1, -34],
//           shadowSize: [41, 41],
//         })
//       );
//     }
//   }, []);

//   return (
//     <div className="grid grid-cols-2 bg-gray-50 ">
     
//       <div className="bg-white p-6  rounded-lg">
//         <h2 className="text-xl font-semibold mb-2">Top regions by revenue</h2>
//         <p className="text-gray-500 mb-4">Where you generated most of the revenue</p>
//         <div className="overflow-x-auto">
//           <table className="w-full border-collapse">
//             <thead>
//               <tr className="border-b bg-gray-100 h-20">
//                 <th className="p-2 text-left">#</th>
//                 <th className="p-2 text-left">Country</th>
//                 <th className="p-2 text-left">Users</th>
//                 <th className="p-2 text-left">Transactions</th>
//                 <th className="p-2 text-left">Revenue</th>
//                 <th className="p-2 text-left">Conv. Rate</th>
//               </tr>
//             </thead>
//             <tbody>
//               {regionsData.map((region) => (
//                 <tr key={region.id} className="border-b hover:bg-gray-50">
//                   <td className="p-2">{region.id}</td>
//                   <td className="p-2 flex items-center gap-2">
//                     <img src={region.flag} alt={region.country} className="w-6 h-4 rounded-sm border" />
//                     {region.country}
//                   </td>
//                   <td className="p-2">{region.users.toLocaleString()}</td>
//                   <td className="p-2">{region.transactions}</td>
//                   <td className="p-2">${region.revenue.toLocaleString()}</td>
//                   <td className="p-2">{region.convRate}%</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

    
//       <div className="bg-white p-6 rounded-lg">
//         {isClient && markerIcon && (
//           <MapContainer center={[20, 0]} zoom={2} className="h-96 w-full rounded-lg">
//             <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//             {regionsData.map((region) => (
//               <Marker key={region.id} position={region.coords} icon={markerIcon}>
//                 <Popup>
//                   <strong>{region.country}</strong> <br />
//                   Revenue: ${region.revenue.toLocaleString()} <br />
//                   Transactions: {region.transactions}
//                 </Popup>
//               </Marker>
//             ))}
//           </MapContainer>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TopRegions;
