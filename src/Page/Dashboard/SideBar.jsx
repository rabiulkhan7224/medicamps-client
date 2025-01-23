import React, { useState } from 'react';
import { FaAlignLeft } from 'react-icons/fa6';
import { RiAliensLine } from 'react-icons/ri';
import { NavLink } from 'react-router';


const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  
    const links = [
      { name: 'Dashboard', path: '/' },
      { name: 'Profile', path: '/dashboard/profile' },
      { name: 'AddCamp', path: '/dashboard/addcamp' },
      { name: 'Registered Camps', path: '/dashboard/registered' },
      { name: 'Settings', path: '/settings' },
    ];
  
    return (
      <div className=''>
        {/* Hamburger Menu for Small Screens */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden fixed top-24 left-4 z-20 bg-primarycolor/30 text-white p-2 rounded"
        >
          <FaAlignLeft />
        </button>
  
        {/* Sidebar */}
        <div
          className={`fixed z-40 top-24   left-0 h-full bg-gray-800 text-white p-4 transition-transform transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 lg:static lg:w-64`}
        >
          <h1 className="text-2xl font-bold mt-6">My Dashboard</h1>
          <nav className=''>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? 'block px-2 py-2 rounded bg-gray-700'
                        : 'block px-2 py-2 rounded hover:bg-gray-700'
                    }
                    onClick={() => setIsOpen(false)} // Close sidebar on link click (for small screens)
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
  
        {/* Overlay for Small Screens */}
        {isOpen && (
          <div
            onClick={toggleSidebar}
            className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          ></div>
        )}
      </div>
    );
  };

export default SideBar;