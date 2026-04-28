'use client';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/asesst/logo.png';

const Navbar = () => {
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
        <ul className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
          <li>
            <Link href="/" className="hover:text-purple-400 duration-300">
              Home
            </Link>
          </li>

          <li>
            <Link
              href={`/allphoto/`}
              className="hover:text-purple-400 duration-300"
            >
              All Photos
            </Link>
          </li>

          <li>
            <Link
              href="/pricing"
              className="hover:text-purple-400 duration-300"
            >
              Pricing
            </Link>
          </li>

          <li>
            <Link
              href="/profile"
              className="hover:text-purple-400 duration-300"
            >
              Profile
            </Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex gap-3">
          <Link
            href="/signup"
            className="px-5 py-2 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition duration-300"
          >
            Sign Up
          </Link>

          <Link
            href="/signin"
            className="px-5 py-2 rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 text-white shadow-lg hover:scale-105 transition duration-300"
          >
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
