import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#232626] p-4">
      <div className="flex items-center justify-between w-full">
        <div className="text-white font-bold">
          Latest Bet & Race
        </div>
        <div className="bg-[#323738] rounded p-2 flex items-center w-full max-w-md">
          <ul className="flex gap-0 w-full justify-around">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `font-bold px-3 py-2 rounded-md ${isActive ? 'text-white' : 'text-gray-400'}`
                }
              >
                All Bets
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-bets"
                className={({ isActive }) =>
                  `font-bold px-3 py-2 rounded-md ${isActive ? 'text-white' : 'text-gray-400'}`
                }
              >
                My Bets
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/high-roller"
                className={({ isActive }) =>
                  `font-bold px-3 py-2 rounded-md ${isActive ? 'text-white' : 'text-gray-400'}`
                }
              >
                High Roller
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/wager-contest"
                className={({ isActive }) =>
                  `font-bold px-3 py-2 rounded-md ${isActive ? 'text-white ' : 'text-gray-400'}`
                }
              >
                Wager Contest
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
