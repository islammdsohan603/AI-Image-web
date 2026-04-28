import React from 'react';
import NavLink from './NavLink';

const MenubarPage = () => {
  return (
    <div>
      <ul className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
        <li>
          <NavLink href="/" className="hover:text-purple-400 duration-300">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            href={`/allphoto`}
            className="hover:text-purple-400 duration-300"
          >
            All Photos
          </NavLink>
        </li>

        <li>
          <NavLink
            href="/pricing"
            className="hover:text-purple-400 duration-300"
          >
            Pricing
          </NavLink>
        </li>

        <li>
          <NavLink
            href="/profile"
            className="hover:text-purple-400 duration-300"
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MenubarPage;
