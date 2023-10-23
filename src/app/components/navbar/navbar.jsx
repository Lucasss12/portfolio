import Link from 'next/link'
import React from 'react'

export default function navbar() {
  return (
    <>
      <nav className='px-6 py-6 flex justify-between content-center bg-white shadow-sm text-lg font-semibold'>
        <Link href='/' ><h1 className="mr-4 text-2xl">&lt; Lucas /&gt;</h1></Link>

        <ul className='flex items-center space-x-4'>
          <li>
            <Link href='/'><h1 className='py-1 px-3 hover:bg-slate-400 hover:bg-opacity-20 rounded-lg'>A propos</h1></Link>
          </li>
          <li>
            <Link href='#projets'><h1 className='py-1 px-3 hover:bg-slate-400 hover:bg-opacity-20 rounded-lg'>Projets</h1></Link>
          </li>
          <li>
            <Link href='/'><h1 className='py-1 px-3 hover:bg-slate-400 hover:bg-opacity-20 rounded-lg'>Contact</h1></Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
