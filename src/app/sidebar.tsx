"use client";
import Link from "next/link";
import { useState } from "react";
import { 
  FaHome, FaShoppingCart, FaEnvelope, FaTasks, FaCalendar, FaClipboardList, 
  FaGift, FaFolder, FaUsers, FaBookmark, FaLock, FaBell, FaQuestionCircle, 
  FaGlobe, FaTag, FaUserFriends, FaHourglass, FaExclamationTriangle, FaThLarge, 
  FaTable, FaChartBar,FaPhone
} from "react-icons/fa";
import { LuClock4 } from "react-icons/lu"; 
import { IoIosChatbubbles } from "react-icons/io";
import { MdTimeline } from "react-icons/md";
import { FiLayout } from "react-icons/fi";
import { GoGitBranch } from "react-icons/go";
import { TbPlayerTrackNext } from "react-icons/tb";
import { BsDisplay } from "react-icons/bs";
import { FaWrench, FaFileAlt, FaCogs } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md fixed left-0 top-16 h-[calc(100vh-4rem)] group overflow-hidden hover:overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      <nav className="p-4">
        {/* Home Section */}
        <ul className="space-y-2">
          <li>
            <Link href="/" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded text-blue-600 font-medium">
              <LuClock4 /> Home
            </Link>
          </li>
        </ul>

        {/* Apps Section */}
        <h3 className="text-gray-500 text-sm mt-4 mb-2 uppercase tracking-wide">Apps</h3>
        <ul className="space-y-2">
          <li><Link href="/e-commerce" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded"><FaShoppingCart /> E-commerce</Link></li>
          <li><Link href="/crm" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded"><FaPhone /> CRM</Link></li>
          <li><Link href="/project-management" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded"><FaTasks /> Project Management</Link></li>
          <li><Link href="/travel-agency" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded"><FaGift /> Travel Agency</Link></li>
          <li><Link href="/chat" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded"><IoIosChatbubbles /> Chat</Link></li>
          <li><Link href="/email" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded"><FaEnvelope /> Email</Link></li>
          <li><Link href="/events" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded"><FaBookmark /> Events</Link></li>
          <li><Link href="/kanban" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded"><FaTable /> Kanban</Link></li>
          <li><Link href="/social" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded"><FaUsers /> Social</Link></li>
          <li><Link href="/file-manager" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded"><FaFolder /> File Manager</Link></li>
          <li><Link href="/calendar" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded"><FaCalendar /> Calendar</Link></li>
        </ul>

        {/* Pages Section */}
        <h3 className="text-gray-500 text-sm mt-4 mb-2 uppercase tracking-wide">Pages</h3>
        <ul className="space-y-2">
          <li><Link href="/starter" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded"><FaThLarge /> Starter</Link></li>
          <li><Link href="/faq" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded"><FaQuestionCircle /> FAQ</Link></li>
          <li><Link href="/landing" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded"><FaGlobe /> Landing</Link></li>
          <li><Link href="/pricing" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded"><FaTag /> Pricing</Link></li>
          <li><Link href="/notifications" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded"><FaBell /> Notifications</Link></li>
          <li><Link href="/members" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded"><FaUserFriends /> Members</Link></li>
          <li><Link href="/timeline" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded"><MdTimeline /> Timeline</Link></li>
          <li><Link href="/coming-soon" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded"><FaHourglass /> Coming Soon</Link></li>
          <li><Link href="/errors" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded"><FaExclamationTriangle /> Errors</Link></li>
          <li><Link href="/authentication" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded"><FaLock /> Authentication</Link></li>
          <li><Link href="/layouts" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded"><FiLayout /> Layouts</Link></li>
        </ul>

        {/* Modules Section */}
        <h3 className="text-gray-500 text-sm mt-4 mb-2 uppercase tracking-wide">Modules</h3>
        <ul className="space-y-2">
          <li><Link href="/forms" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded"><FaClipboardList /> Forms</Link></li>
          <li><Link href="/icons" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded"><FaThLarge /> Icons</Link></li>
          <li><Link href="/tables" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded"><FaTable /> Tables</Link></li>
          <li><Link href="/charts" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded"><FaChartBar /> Charts</Link></li>
        </ul>

        {/* Documentation Section */}
        <h3 className="text-gray-500 text-sm mt-4 mb-2 uppercase tracking-wide">Documentation</h3>
        <ul className="space-y-2">
          <li><Link href="/getting-started" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded"><FaWrench /> Getting Started</Link></li>
          <li><Link href="/customization" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded"><FaCogs /> Customization</Link></li>
          <li><Link href="/design-file" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded"><FaFileAlt /> Design File</Link></li>
          <li><Link href="/changelog" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded"><GoGitBranch /> Changelog</Link></li>
          <li><Link href="/migrations" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded"><TbPlayerTrackNext /> Migrations</Link></li>
          <li><Link href="/showcase" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded"><BsDisplay /> Showcase</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;