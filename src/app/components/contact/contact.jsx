import React from 'react'

export default function contact() {
  return (
    <div id="contact" className="flex flex-col items-center justify-center pt-12 mt-24 bg-white shadow-lg">
        <h1 className='text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-5'>Contact</h1>
        <p className='text-xl text-zinc-600'>Discutons de votre projet ensemble 👉🏻 <a className='font-semibold' href="mailto:lucas.mene.pro@gmail.com">lucas.mene.pro@gmail.com</a></p>
        <div>
            <p className='text-xl text-zinc-600 mt-12 mb-4'>Copyright © 2023. Tous les droits sont réservés</p>
        </div>
    </div>
  )
}
