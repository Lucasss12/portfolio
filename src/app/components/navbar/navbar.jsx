import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="px-6 py-6 flex justify-between content-center bg-white shadow-sm text-lg font-semibold">
      <Link href="/">
        <h1 className="mr-4 text-2xl lg:text-3xl xl:text-4xl">&lt; Lucas /&gt;</h1>
      </Link>
      <ul className="flex items-center space-x-4 text-lg">
        <li>
          <Link href="#projets">
            <h1 className="py-1 px-3 sm:hover:bg-slate-400 sm:hover:bg-opacity-20 rounded-lg">
              Projets
            </h1>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <h1 className="py-1 px-3 sm:hover:bg-slate-400 sm:hover:bg-opacity-20 rounded-lg">
              Contact
            </h1>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
