'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import '../projets/style.css'
import projets from '../../db/projets.json'

export default function Projets() {
  const [rotationAngles, setRotationAngles] = useState(Array(projets.length).fill({ x: 0, y: 0 }));
  const [isMouseAway, setIsMouseAway] = useState(false);

  const handleMouseMove = (index, e) => {
    const image = e.currentTarget;
    const { width, height, left, top } = image.getBoundingClientRect();
    const mouseX = e.clientX - (left + width / 2);
    const mouseY = e.clientY - (top + height / 2);
    const angleX = (mouseX / width) * 20;
    const angleY = (mouseY / height) * 20;

    const newRotationAngles = [...rotationAngles];
    newRotationAngles[index] = { x: angleX, y: angleY };

    setRotationAngles(newRotationAngles);

    const distance = Math.sqrt(mouseX ** 2 + mouseY ** 2);
    if (distance > 150) {
      setIsMouseAway(true);
    } else {
      setIsMouseAway(false);
    }
  };

  const resetRotation = () => {
    if (isMouseAway) {
      setRotationAngles(Array(projets.length).fill({ x: 0, y: 0 }));
    }
  };


  return (
      <div id='projets' className='flex flex-col items-center p-6'>
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">Mes <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500'>Projets</span></h1>
        </div>
        
        {projets.map((projet, index) => (
        <div key={index} className='bg-white mt-16 flex lg:flex-row flex-col py-3 sm:p-6 rounded-lg shadow-lg items-center'>
          <div onMouseMove={(e) => handleMouseMove(index, e)} onMouseOut={resetRotation} style={{ transform: `perspective(1000px) rotateY(${rotationAngles[index].x}deg) rotateX(${rotationAngles[index].y}deg)`, }}  className={`mb-10 lg:mb-0 ${isMouseAway ? "" : "image-3d"}`}>
            <Link href={projet.link}><Image src={projet.media} width={530} height={300} alt="avatar" style={{ width: '100%', maxWidth: '530px', height: 'auto'}} className='rounded-lg shadow-lg'/> </Link>
          </div>

          <div className='px-4 w-96 flex flex-col items-center justify-center'>
            <h1 className='text-3xl mb-4'>{projet.title} </h1>
            <p className='text-lg text-zinc-600 text-center'>{projet.description}</p>
              <div className='flex space-x-3 '>
                {projet.technos.map((techno, index) => (
                  <p key={index} className='bg-white border p-1 mt-4 shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out'>{techno}</p>
                ))}
              </div>

              <div className='flex mt-10 space-x-4 items-center'>
                <p className='bg-gradient-to-r from-blue-500 to-purple-500 p-1 shadow-lg rounded-lg text-white'>{projet.status}</p>
                {projet.github !== "privé" && (
                  <Link className='flex hover:fill-blue-600 hover:scale-110 hover:text-blue-600 transition-transform duration-300 ease-in-out' href={projet.github}>Github <svg className='ml-1' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48"><path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 31.66536 35.956939 38.122519 29 40.251953 L 29 35.136719 C 29 33.226635 27.899316 31.588619 26.308594 30.773438 A 10 8 0 0 0 32.4375 18.720703 C 32.881044 17.355414 33.376523 14.960672 32.199219 13.076172 C 29.929345 13.076172 28.464667 14.632086 27.765625 15.599609 A 10 8 0 0 0 24 15 A 10 8 0 0 0 20.230469 15.59375 C 19.529731 14.625773 18.066226 13.076172 15.800781 13.076172 C 14.449711 15.238817 15.28492 17.564557 15.732422 18.513672 A 10 8 0 0 0 21.681641 30.779297 C 20.3755 31.452483 19.397283 32.674042 19.097656 34.15625 L 17.783203 34.15625 C 16.486203 34.15625 15.98225 33.629234 15.28125 32.740234 C 14.58925 31.851234 13.845172 31.253859 12.951172 31.005859 C 12.469172 30.954859 12.144453 31.321484 12.564453 31.646484 C 13.983453 32.612484 14.081391 34.193516 14.650391 35.228516 C 15.168391 36.160516 16.229687 37 17.429688 37 L 19 37 L 19 40.251953 C 12.043061 38.122519 7 31.66536 7 24 C 7 14.593391 14.593385 7 24 7 z"></path></svg></Link>
                )}  
                <Link className='flex hover:fill-blue-600 hover:scale-110 hover:text-blue-600 transition-transform duration-300 ease-in-out' href={projet.link}>Site live <svg className='ml-1' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48"><path d="M 41.470703 4.9863281 A 1.50015 1.50015 0 0 0 41.308594 5 L 27.5 5 A 1.50015 1.50015 0 1 0 27.5 8 L 37.878906 8 L 22.439453 23.439453 A 1.50015 1.50015 0 1 0 24.560547 25.560547 L 40 10.121094 L 40 20.5 A 1.50015 1.50015 0 1 0 43 20.5 L 43 6.6894531 A 1.50015 1.50015 0 0 0 41.470703 4.9863281 z M 12.5 8 C 8.3754991 8 5 11.375499 5 15.5 L 5 35.5 C 5 39.624501 8.3754991 43 12.5 43 L 32.5 43 C 36.624501 43 40 39.624501 40 35.5 L 40 25.5 A 1.50015 1.50015 0 1 0 37 25.5 L 37 35.5 C 37 38.003499 35.003499 40 32.5 40 L 12.5 40 C 9.9965009 40 8 38.003499 8 35.5 L 8 15.5 C 8 12.996501 9.9965009 11 12.5 11 L 22.5 11 A 1.50015 1.50015 0 1 0 22.5 8 L 12.5 8 z"></path></svg> </Link> 
              </div>
          </div>
        </div>
        ))}
      </div>
  )
}