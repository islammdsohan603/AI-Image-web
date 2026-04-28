'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '@/asesst/logo.png';
import NavLink from './NavLink';
import MenubarPage from './Menubar';
import { authClient } from '@/app/lib/auth-client';
import { Avatar } from '@heroui/react';

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="flex justify-between items-center py-4 px-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex gap-3 items-center">
          <div className="bg-linear-to-r from-purple-600 to-indigo-600 p-2 rounded-xl shadow-lg">
            <Image
              src={logo}
              alt="logo"
              width={28}
              height={28}
              className="object-cover"
            />
          </div>

          <h3 className="font-black text-xl text-white tracking-wide">
            pixgen.
          </h3>
        </div>
        {/* Menu */}
        <div>
          <MenubarPage />
        </div>
        {/* Buttons */}
        {!user && (
          <div className="flex gap-3">
            <Link
              href={`/signup`}
              className="px-5 py-2 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition duration-300"
            >
              Sign Up
            </Link>

            <Link
              href={`/signin`}
              className="px-5 py-2 rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 text-white shadow-lg hover:scale-105 transition duration-300"
            >
              Sign In
            </Link>
          </div>
        )}
        :
        {user && (
          <div>
            <Avatar>
              <Avatar.Image
                alt="John Doe"
                src={user?.image}
                referrerPolicy="no-referrer"
              />
              <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
            </Avatar>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
