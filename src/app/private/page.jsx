import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='flex justify-center mt-44'>
      <div className='font-semibold text-center'>
        <p className='mb-4 text-6xl'>Ce site est privé</p>
        <Link className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 text-3xl' href='/'>Retour à la page d'accuei</Link>
      </div>
    </div>
  )
}
