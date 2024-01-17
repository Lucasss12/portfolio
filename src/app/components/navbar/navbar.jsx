import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="sm:px-20 px-6 py-5 flex justify-between content-center bg-white shadow-sm font-semibold items-center">
      <Link href="/">
        <h1 className="text-xl lg:text-3xl">&lt; Lucas /&gt;</h1>
      </Link>
      <ul className="flex items-center sm:space-x-1 text-lg sm:text-xl">
        <li>
          <Link href="#projets">
            <h1 className="py-1 px-2 sm:hover:bg-slate-400 sm:hover:bg-opacity-20 rounded-lg">
              Projets
            </h1>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <h1 className="py-1 px-2 sm:hover:bg-slate-400 sm:hover:bg-opacity-20 rounded-lg">
              Contact
            </h1>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
