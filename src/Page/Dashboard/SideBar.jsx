import React, { useState } from 'react';
import { FaAlignLeft } from 'react-icons/fa6';
import { RiAliensLine } from 'react-icons/ri';
import { NavLink } from 'react-router';
import useRole from '../../hooks/useRole';


const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [role, loading] = useRole()

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { name: '', path: '/' },
    role === 'admin' &&
    { name: '', path: '' },
    { name: '', path: '' },
    { name: '', path: '' },
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
        className={`fixed z-40 top-24   left-0 h-full bg-gray-800 text-white p-4 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 lg:static lg:w-64`}
      >
        <h1 className="text-2xl font-bold mt-6">My Dashboard</h1>
        <nav className=''>
          <ul className="space-y-2">
            <li>
              <NavLink
                to={'/dashboard/profile'}
                className={({ isActive }) =>
                  isActive
                    ? 'block px-2 py-2 rounded bg-gray-700'
                    : 'block px-2 py-2 rounded hover:bg-gray-700'
                }
              // onClick={() => setIsOpen(false)} // Close sidebar on link click (for small screens)
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/dashboard/registered'}
                className={({ isActive }) =>
                  isActive
                    ? 'block px-2 py-2 rounded bg-gray-700'
                    : 'block px-2 py-2 rounded hover:bg-gray-700'
                }
              // onClick={() => setIsOpen(false)} // Close sidebar on link click (for small screens)
              >
                Registered Camps
              </NavLink>
            </li>
            <li>{role === 'admin' ? <NavLink
              to={'/dashboard/addcamp'}
              className={({ isActive }) =>
                isActive
                  ? 'block px-2 py-2 rounded bg-gray-700'
                  : 'block px-2 py-2 rounded hover:bg-gray-700'
              }
            // onClick={() => setIsOpen(false)} // Close sidebar on link click (for small screens)
            >
              AddCamp
            </NavLink> : ''}
            </li>
            <li> {role === 'admin' ?
            <NavLink
                to={'/dashboard/manage-camps'}
                className={({ isActive }) =>
                  isActive
                    ? 'block px-2 py-2 rounded bg-gray-700'
                    : 'block px-2 py-2 rounded hover:bg-gray-700'
                }
              // onClick={() => setIsOpen(false)} // Close sidebar on link click (for small screens)
              >
                Manage Camps
              </NavLink>  : ''}
            </li>
            <li> {role === 'admin' ?
            <NavLink
                to={'/dashboard/manage-register'}
                className={({ isActive }) =>
                  isActive
                    ? 'block px-2 py-2 rounded bg-gray-700'
                    : 'block px-2 py-2 rounded hover:bg-gray-700'
                }
              // onClick={() => setIsOpen(false)} // Close sidebar on link click (for small screens)
              >
                Manage Registered
              </NavLink>  : ''}
            </li>
            <li>
            <NavLink
                to={'/dashboard/payments-history'}
                className={({ isActive }) =>
                  isActive
                    ? 'block px-2 py-2 rounded bg-gray-700'
                    : 'block px-2 py-2 rounded hover:bg-gray-700'
                }
              // onClick={() => setIsOpen(false)} // Close sidebar on link click (for small screens)
              >
                Payment History
              </NavLink>
            </li>
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