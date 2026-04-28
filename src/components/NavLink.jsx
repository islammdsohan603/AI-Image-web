'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`relative group px-3 py-2 transition duration-300 ${
        isActive
          ? 'text-purple-400 font-semibold'
          : 'text-zinc-300 hover:text-purple-400'
      }`}
    >
      {children}

      <span
        className={`absolute left-0 -bottom-1 h-0.5 rounded-full bg-linear-to-r from-purple-500 to-indigo-500 transition-all duration-300 ${
          isActive ? 'w-full' : 'w-0 group-hover:w-full'
        }`}
      ></span>
    </Link>
  );
};

export default NavLink;
